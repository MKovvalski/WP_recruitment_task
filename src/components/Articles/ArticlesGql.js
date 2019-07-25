import React, { Component } from 'react'

import { fetchArticles } from '../../utils/api'

import ArticlesView from './ArticlesView'
import { logError } from '../../utils/helpers'

const INITIAL_STATE = 'loading'

const INITIAL_HAS_MORE_STATE = true

const DEFAULT_ARTICLES_PER_PAGE = 15

const INITIAL_PAGE_STATE = 1

const quantifyOffset = pageNum => (pageNum - 1) * DEFAULT_ARTICLES_PER_PAGE

const hasMoreArticles = articlesCount => articlesCount % DEFAULT_ARTICLES_PER_PAGE === 0

class ArticlesGql extends Component {
    state = {
        data: [],
        loadingState: INITIAL_STATE,
        currentPageNumber: INITIAL_PAGE_STATE,
        hasMore: true,
    }

    updateDataState = data => this.setState({ data })

    updateLoadingState = loadingState => this.setState({ loadingState })

    updateHasMoreState = hasMore => this.setState({ hasMore })

    reinitializeState = () => (
        this.setState({
            loadingState: INITIAL_STATE,
            currentPageNumber: INITIAL_PAGE_STATE,
            hasMore: INITIAL_HAS_MORE_STATE,
        })
    )

    fetchTagsData = async (fetchParams) => {
        const { cid, tags } = this.props
        let loadingState

        try {
            const res = await fetchArticles({
                cid,
                tags,
                limit: DEFAULT_ARTICLES_PER_PAGE,
                ...fetchParams
            })

            const resLength = res.articles.length

            await this.updateDataState(res.articles)

            if (resLength < DEFAULT_ARTICLES_PER_PAGE) {
                await this.updateHasMoreState(false)
            }

            loadingState = resLength ? 'success' : 'no-articles'

        } catch (err) {
            logError(err.message)
            loadingState = 'failed'
        }

        this.updateLoadingState(loadingState)
    }

    initiateReFetch = async () => {
        await this.reinitializeState()
        this.fetchTagsData()
    }

    fetchMorePages = async () => {
        const { cid, tags } = this.props
        const { currentPageNumber, data } = this.state

        const newPageNum = currentPageNumber + 1

        try {
            const res = await fetchArticles({
                cid,
                tags,
                offset: quantifyOffset(newPageNum),
                limit: DEFAULT_ARTICLES_PER_PAGE,
            })

            const resLength = res.articles.length

            if (resLength) {
                this.setState({
                    data:[ ...data, ...res.articles ],
                    currentPageNumber: newPageNum
                })
            }

            if (resLength < DEFAULT_ARTICLES_PER_PAGE) {
                await this.updateHasMoreState(false)
            }

        } catch (err) {
            logError(err.message)
            this.updateHasMoreState(false)
        }

    }

    loadMorePages = () => {
        if (hasMoreArticles(this.state.data.length)) {
            return this.fetchMorePages()
        } else {
            this.updateHasMoreState(false)
        }
    }

    componentDidMount() {
        this.fetchTagsData()
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        const { cid: prevCid, tags: prevTags } = prevProps
        const { cid, tags } = this.props

        const cidChanged = prevCid !== cid
        const tagsChanged = (prevTags.length > 0 && prevTags) !== (tags.length > 0 && tags)

        if (cidChanged || tagsChanged) {
            return this.initiateReFetch()
        }
    }

    render() {
        const { data, hasMore, loadingState } = this.state

        return (
            <ArticlesView
                data={data}
                loadMorePages={this.loadMorePages}
                hasMore={hasMore}
                loadingState={loadingState}
            />
        )
    }
}

export default ArticlesGql

import React, { Component } from 'react'
import { fetchSingleArticle } from '../../utils/api'

import ArticlePage from './article'
import ErrorPage from '../error'
import Loader from '../../components/Loader'

import { logError } from '../../utils/helpers'

// TODO: implement single article page

const COMPONENT_MAP = {
    'loading': Loader,
    'success': ArticlePage,
    'error': ErrorPage,
}

class ArticlePageGqlWrapper extends Component {
    state = {
        data: {},
        loadingState: 'loading'
    }

    updateDataState = data => this.setState({ data })

    updateLoadingState = loadingState => this.setState({ loadingState })

    callForPageResources = async () => {
        const { match: { params = {} } } = this.props

        try {
            const res = await fetchSingleArticle({ url: params.article_slug })
            await this.updateDataState(res)
            this.updateLoadingState('success')

        } catch (err) {
            logError(err.message)
            this.updateLoadingState('error')
        }
    }

    componentDidMount() {
        this.callForPageResources()
    }

    render () {
        const { data, loadingState } = this.state

        const Component = COMPONENT_MAP[loadingState]

        return (
            <Component data={data} />
        )
    }
}

export default ArticlePageGqlWrapper
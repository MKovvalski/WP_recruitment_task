import React, { Component } from 'react'
import { fetchCategoryTags } from '../../utils/api'

import TagsContainer from './TagsContainer'

import { logError } from '../../utils/helpers'

const INITIAL_STATE = 'loading'

class TagsGql extends Component {
    state = {
        data: {},
        loadingState: INITIAL_STATE
    }

    updateDataState = data => this.setState({ data })

    updateLoadingState = loadingState => this.setState({ loadingState })

    fetchTagsData = async () => {
        let loadingState
        try {
            const res = await fetchCategoryTags(this.props.category)
            await this.updateDataState(res)
            loadingState = res.articles.length ? 'success' : 'no-tags'

        } catch (err) {
            logError(err.message)
            loadingState = 'failed'
        }

        this.updateLoadingState(loadingState)
    }

    componentDidMount() {
        this.fetchTagsData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.category !== this.props.category) {
            this.updateLoadingState('loading')
            this.props.changeTagsState([])
            this.fetchTagsData()
        }
    }

    render () {
        const { data, loadingState } = this.state

        return (
            <TagsContainer
                refetchData={this.fetchTagsData}
                data={data}
                loadingState={loadingState}
                {...this.props}
            />
        )
    }
}

export default TagsGql

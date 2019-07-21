import React, { Component } from 'react'
import Layout from '../hocs/layout'

import { CATEGORIES_MAP } from '../utils/consts'

const PAGE_NAME = 'index'

class IndexPage extends Component {
    state = {
        filterMenuOpen: false,
        category: CATEGORIES_MAP.technology.cid,
        activeTags: [],
    }

    toggleFilterMenuState = () => this.setState(state => ({ filterMenuOpen: !state.filterMenuOpen }))

    changeCategoryState = category => this.setState({ category })

    changeTagsState = tags => this.setState({ tags })

    render () {
        return (
            <>
                <Layout
                    toggleFilterMenu={this.toggleFilterMenuState}
                    pageName={PAGE_NAME}
                >
                    components go here
                </Layout>
            </>
        )
    }
}

export default IndexPage
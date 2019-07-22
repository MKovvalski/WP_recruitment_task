import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
import Layout from '../hocs/layout'

import CategorySelector from '../components/CategorySelector'
import TagsSelector from '../components/TagsSelector/TagsGql'
import FilterSectionHeader from '../components/FilterSectionHeader'

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

    changeTagsState = activeTags => this.setState({ activeTags })

    render () {
        const { category, filterMenuOpen: active } = this.state

        return (
            <div className='index-page'>
                <Layout
                    toggleFilterMenu={this.toggleFilterMenuState}
                    pageName={PAGE_NAME}
                >
                    <div className={bemCx('index-page__filter-section', { active })}>
                        <FilterSectionHeader
                            closeFilters={this.toggleFilterMenuState}
                        />
                        <CategorySelector
                            category={category}
                            changeCategory={this.changeCategoryState}
                        />
                        <TagsSelector
                            category={category}
                            changeTagsState={this.changeTagsState}
                            closeFilterMenu={this.toggleFilterMenuState}
                        />
                    </div>
                </Layout>
            </div>
        )
    }
}

export default IndexPage
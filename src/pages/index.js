import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
import Layout from '../hocs/layout'

import CategorySelector from '../components/CategorySelector'
import FilterSectionHeader from '../components/FilterSectionHeader'
import ArticlesList from '../components/Articles/ArticlesGql'
import TagsSelector from '../components/TagsSelector/TagsGql'

import { CATEGORIES_MAP } from '../utils/consts'

const PAGE_NAME = 'index'

const INITIAL_CATEGORY_STATE = CATEGORIES_MAP.technology.cid

const INITIAL_TAGS_STATE = []

class IndexPage extends Component {
    state = {
        filterMenuOpen: false,
        category: INITIAL_CATEGORY_STATE,
        activeTags: INITIAL_TAGS_STATE,
    }

    toggleFilterMenuState = () => this.setState(state => ({ filterMenuOpen: !state.filterMenuOpen }))

    changeCategoryState = category => this.setState({ category, activeTags: INITIAL_TAGS_STATE })

    changeTagsState = activeTags => this.setState({ activeTags })

    updateTagsState = activeTags => {

        if (this.state.activeTags !== activeTags && activeTags) {
            this.changeTagsState(activeTags)
        }

        if (!activeTags && this.state.activeTags.length) {
            this.changeTagsState(INITIAL_TAGS_STATE)
        }
    }



    render () {
        const { category, filterMenuOpen: active, activeTags } = this.state

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
                            updateParentTagsState={this.updateTagsState}
                            closeFilterMenu={this.toggleFilterMenuState}
                        />
                    </div>
                    <ArticlesList
                        cid={category}
                        tags={activeTags}
                    />
                </Layout>
            </div>
        )
    }
}

export default IndexPage
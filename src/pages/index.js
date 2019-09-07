import React, { Component } from 'react'
import bemCx                from 'bem-modifiers'
import Layout               from '../hocs/layout'

import CategorySelector    from '../components/CategorySelector'
import FilterSectionHeader from '../components/FilterSectionHeader'
import ArticlesList        from '../components/Articles/ArticlesGql'
import TagsSelector        from '../components/TagsSelector/TagsGql'

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

  scrollToArticles = () => {
    if (this.scrollAnchor && this.windowAboveMediumBreakpoint()) {
      this.scrollAnchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  updateTagsState = activeTags => {

    if (this.state.activeTags !== activeTags && activeTags) {
      this.changeTagsState(activeTags)
      this.scrollToArticles()
    }

    if (!activeTags && this.state.activeTags.length) {
      this.changeTagsState(INITIAL_TAGS_STATE)
      this.scrollToArticles()
    }

  }

  windowAboveMediumBreakpoint = () => window.innerWidth >= 768

  render() {
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
              closeFilters={this.toggleFilterMenuState}
              updateParentTagsState={this.updateTagsState}
              closeFilterMenu={this.toggleFilterMenuState}
            />
          </div>
          <div ref={ref => this.scrollAnchor = ref} />
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
import React, { Component } from 'react'
import TagsSelectorView     from './TagsSelectorView'

const removeSpaces = string => string.replace(/\s/g, '')

const unifyTagsArray = data => data.reduce((acc, { tags }) => [ ...acc, ...tags ], [])

const filterOverlappingTags = array => array.filter((item, pos, self) => self.indexOf(item) === pos)

const createTagObjects = array => array.reduce((acc, tag) => {
  acc[ removeSpaces(tag) ] = 1
  return acc
}, {})

const countNumberOfOccurrences = (array, tagObjects) => array.forEach(tag => {
  const shrunkTag = removeSpaces(tag)
  tagObjects[ shrunkTag ] = tagObjects[ shrunkTag ] + 1
})

const segregateByMostPopular = data => {
  const filteredTags = filterOverlappingTags(data)

  let tagObjects = createTagObjects(filteredTags)

  countNumberOfOccurrences(data, tagObjects)

  return filteredTags.sort((tagA, tagB) => (
    tagObjects[ removeSpaces(tagB) ] - tagObjects[ removeSpaces(tagA) ]
  ))
}

const formatTags = data => segregateByMostPopular(unifyTagsArray(data))

class TagsContainer extends Component {
  state = { tagsArray: [] }

  setTagArrayState = (newArrayState = []) => this.setState({ tagsArray: newArrayState })

  toggleTagInArrayState = tagString => {
    const { tagsArray } = this.state
    const hasThisTag = tagsArray.find(tag => tag === tagString)

    let newTagsArray = hasThisTag
      ? tagsArray.filter(tag => tag !== tagString)
      : [ ...tagsArray, tagString ]

    this.setTagArrayState(newTagsArray)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.category !== this.props.category) {
      this.setTagArrayState()
    }
  }

  manageTagErasing = () => {
    if (this.state.tagsArray.length) {
      this.props.updateParentTagsState()
      this.setTagArrayState()
    }
  }

  applyTagsAndCloseFilters = () => {
    const { updateParentTagsState, closeFilters } = this.props

    updateParentTagsState(this.state.tagsArray)
    closeFilters()
  }

  render() {
    const { data = [] } = this.props
    const { tagsArray } = this.state

    const controls = [
      {
        title: 'Zastosuj',
        onClick: this.applyTagsAndCloseFilters,
        modifier: 'apply',
      },
      {
        title: 'Usuń',
        onClick: this.manageTagErasing,
        modifier: 'eraser',
      },
    ]

    return (
      <TagsSelectorView
        tagsArray={formatTags(data)}
        activeTagsArray={tagsArray}
        toggleTag={this.toggleTagInArrayState}
        controls={controls}
        {...this.props}
      />
    )
  }
}

export default TagsContainer

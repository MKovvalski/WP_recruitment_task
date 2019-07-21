import React from 'react'
import SelectableTag from '../../components/SelectableTag'

const tagsSelector = ({ tagsArray, activeTagsArray, toggleTag }) => (
    <div className='tags-selector'>
        {tagsArray.map((tag, i) => {
            const active = activeTagsArray.find(activeTag => activeTag === tag)
            return <SelectableTag
                key={i}
                title={tag}
                active={active}
                onClick={() => toggleTag(tag)}
                modifiers='tags'
            />
        })}
    </div>
)

export default tagsSelector
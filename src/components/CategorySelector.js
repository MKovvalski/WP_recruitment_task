import React from 'react'
import PageSection from './PageSection'
import SelectableTag from './SelectableTag'

import { CATEGORIES_MAP } from '../utils/consts'

const categorySelector = ({ category, changeCategory }) => {
    const categories = Object.values(CATEGORIES_MAP)
    return (
        <PageSection title='Categories'>
            <div className='category-selector'>
                {categories.map(({ cid, title }) => (
                    <SelectableTag
                        key={cid}
                        title={title}
                        active={cid === category}
                        onClick={() => changeCategory(cid)}
                        modifiers='category'
                    />
                ))}
            </div>
        </PageSection>
    )
}

export default categorySelector
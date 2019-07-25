import React from 'react'
import bemCx from 'bem-modifiers'

import SelectableTag from '../components/SelectableTag'
import LinkWrapper from '../components/LinkWrapper'

const SHOW_ON_PAGES = [
    'index'
]

const shouldDisplay = page => SHOW_ON_PAGES.find(el => el === page)

const header = ({ pageName, toggleFilterMenu, modifiers  }) => {
    return (
        <div className={bemCx('header', [pageName, modifiers])}>
            <div className='header__left-side'>
                <h1>Artykuły</h1>
            </div>
            <div className='header_right-side'>
                {shouldDisplay('index') &&
                <SelectableTag
                    title='filtruj'
                    onClick={toggleFilterMenu}
                    modifiers={['filter', 'header']}
                />
                }
                {shouldDisplay('article') &&
                <LinkWrapper>
                    <SelectableTag
                        title='Powrót'
                        modifiers={['filter', 'header', 'home']}
                    />
                </LinkWrapper>
                }
            </div>
        </div>
    )
}

export default header
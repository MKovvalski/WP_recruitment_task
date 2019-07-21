import React from 'react'

const SHOW_ON_PAGES = [
    'index'
]

const displayFilterButton = page => SHOW_ON_PAGES.find(el => el === page)

const header = ({ pageName }) => {
    return (
        <div>
            Header
            <div>here put logo</div>
            {displayFilterButton(pageName) && <div>here put Filter button</div>}
        </div>
    )
}

export default header
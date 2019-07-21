import React from 'react'
import bemCx from 'bem-modifiers'

const executeMethod = method => typeof method === 'function' && method()

const selectableTag = ({ onClick, title, active, modifiers }) => (
    <div
        onClick={() => executeMethod(onClick)}
        className={bemCx('selectable-tag', [{ active }, modifiers])}
    >
        {title}
    </div>
)

export default selectableTag
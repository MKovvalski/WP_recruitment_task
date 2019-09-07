import React from 'react'
import bemCx from 'bem-modifiers'

const pageSection = ({ title, children, componentsAside, modifiers }) => (
  <div className={bemCx('page-section', modifiers)}>
    <div className='page-section__header'>
      <h2 className='page-section__title'>{title}</h2>
      <div className='page-section__aside'>
        {componentsAside}
      </div>
    </div>
    <div className='page-section__body'>
      {children}
    </div>
  </div>
)

export default pageSection

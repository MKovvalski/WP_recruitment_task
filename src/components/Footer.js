import React from 'react'
import bemCx from 'bem-modifiers'

import { LINKEDIN_LINK } from '../utils/consts'

const footer = ({ pageName, modifiers }) => {
  return (
    <div className={bemCx('footer', [ pageName, modifiers ])}>
      <div className='footer__text'>Designed and built by:</div>
      <a
        className='footer__link'
        href={LINKEDIN_LINK}
      >
        Mateusz Kowalski
      </a>
    </div>
  )
}

export default footer
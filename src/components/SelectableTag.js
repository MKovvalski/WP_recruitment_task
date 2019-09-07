import React from 'react'
import bemCx from 'bem-modifiers'

import { executeMethod } from '../utils/helpers'

const selectableTag = ({ onClick, title, active, modifiers }) => (
  <div
    onClick={() => executeMethod(onClick)}
    className={bemCx('selectable-tag', [ { active }, modifiers ])}
  >
    {title}
  </div>
)

export default selectableTag
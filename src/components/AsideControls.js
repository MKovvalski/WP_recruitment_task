import React from 'react'
import bemCx from 'bem-modifiers'

import SelectableTag from '../components/SelectableTag'

const asideControls = ({ controlsArray, modifiers }) => (
  <div className={bemCx('aside-controls', modifiers )}>
      {controlsArray.map(({ title, onClick, modifier }, i) => (
          <SelectableTag
              key={i}
              title={title}
              onClick={onClick}
              modifiers={modifier}
          />
      ))}
  </div>
)

export default asideControls
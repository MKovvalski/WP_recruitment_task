import React         from 'react'
import SelectableTag from '../components/SelectableTag'

const filterSectionHeader = ({ closeFilters }) => (
  <div className='filter-section-header'>
    <div className='filter-section-header__prompt'>
      Dostosuj Filtry
    </div>
    <SelectableTag
      title='zamknij'
      onClick={closeFilters}
      modifiers={[ 'filter', 'header' ]}
    />
  </div>
)

export default filterSectionHeader
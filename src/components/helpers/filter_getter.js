import React from 'react';

const option = (props) => {
  const {filter} = props

//let filterNoDup = filter.filter((filterName, position) => {
//  return filter.indexOf(filterName) === position
//}

  return (
    //<option value={filterNoDup}>{filterNoDup}</option>
    <option value={filter}>{filter}</option>
  )
}








export default option

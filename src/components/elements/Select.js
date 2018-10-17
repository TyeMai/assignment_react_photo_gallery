import React from 'react';
//import Filter_getter from '../helpers/filter_getter';


const Select = (props) => {

  const {options, ...restOfProps} = props
    const optionElements = options.map((option) => (
      //<Filter_getter filter={instagramDatum.filter} />
      //<Filter_getter filter={option} />

      <option key={option} value={option}>
        {option}
      </option>
    ))

//<option>Please Select an Option</option>
  //console.log(props)
    return (
      <select className="filter_selector" {...restOfProps} onChange={props.handleFilterChosen}>
        {optionElements}
      </select>
    )

}


export default Select

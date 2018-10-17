import React from 'react';


const Button = (props) => {
  const {btnName, extraBtnInfo, btnFunction, className} = props

  return (

    <button onClick={btnFunction} className={className}>
      {btnName} {extraBtnInfo}
    </button>
  )


}

export default Button

import React from 'react';


const Page = (props) => {

 const {direction, className, btnClick} = props



  return (

    <button  onClick={btnClick} className={className}>
      {direction}
    </button>

  )
}

export default Page


/*
<Button onSortClick={this.onSortClick} btnInfo={"Sort By #of Likes"} className="sort-button" btnLable={likesSortDir}/>


const Button = (props) => {
  const {btnInfo, btnLable} = props

  return (

    <button onClick={props.onSortClick}>
      {btnInfo} {btnLable}
    </button>
  )


}
*/

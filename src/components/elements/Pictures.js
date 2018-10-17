import React, {Component} from 'react';
//import PictureHelp from '../helpers/PictureHelp';
import instagramData from "./photos";
import Select from './Select';
import Picture from './Picture'
import NumPics from './NumPics'
//import Page from './Page'
import Button from './Button'
import Form from './Form'

import {
  getFilters,
  filterPics,
  sortPics,
  searchPics
} from '../helpers/photoFuncs'


const instagramOptions = getFilters()

class Pictures extends Component {
//console.log(instagramOptions)
  constructor() {
    super()
    this.state= {
      instagramOption: "All",
      instaInfo: instagramData.data,
      likesSortDir: null
      //numMatches: instagramData.data.length

    }
  }

  handleFilterChosen = (e) => {
    this.setState({
      instagramOption:e.target.value,
      instaInfo: filterPics(e.target.value),
      //numMatches: filterPics(e.target.value).length //instaInfo.length
    })
  //  console.log(instaInfo.length
  }

  onSortClick = (e) => {
    const { likesSortDir } = this.state;
    console.log(e.target)
    //console.log(likesSortDir)
    this.setState({
      likesSortDir: (
        likesSortDir === null || likesSortDir === 'descending'
      ? 'ascending'
      : 'descending'
    )
    })
    //console.log(("descending" || null) ? 'ascending' :  "descending")
  }

/*
  return condition1 ? value1
          : condition2 ? value2
          : condition3 ? value3
          : value4;
*/


  onChangeInput = (e) => { //move to form component
    this.setState({
      searchTerm: e.target.value //takes a form element that has that name.
      // state.results

    })
  }

 render() {
   const {instagramOption, instaInfo, likesSortDir, searchTerm} = this.state
   let instagramData = instaInfo
/*

   if(searchTerm && likesSortDir){
     instagramData = sortPics(searchPics(instaInfo), likesSortDir)
   }
*/
   if(searchTerm){
     instagramData = searchPics(instagramData, searchTerm)
     //instaInfo = searchPics(instaInfo, searchTerm)
   }

   if(likesSortDir){
     instagramData = sortPics(instagramData, likesSortDir)
   } //else {
    // instagramData = instaInfo
   //}



   //console.log(sortedInstagramData)
    return (
      <div>
        <div className = "inputGroup">
        <Form name="searchTerm" inputType="text" onChangeInput={this.onChangeInput} placeholder="Search Term"/>
        <Button btnFunction={this.onSortClick} btnName={"Sort By #of Likes"} className="sort-button" extraBtnInfo={likesSortDir}/>
        <Select options={instagramOptions}  value={instagramOption} handleFilterChosen={this.handleFilterChosen} />
        <NumPics numMatches={instagramData.length} matchesFilter={instaInfo.length} />
      </div>
        <Picture InstagramData={instagramData} className="picture_main"  filterSelected={instagramOption} numMatches={instaInfo.length}/>

      </div>
    )
 }
}
export default Pictures

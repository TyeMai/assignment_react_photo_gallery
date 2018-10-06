import React, {Component} from 'react';
//import PictureHelp from '../helpers/PictureHelp';
import instagramData from "./photos";
import Select from './Select';
import Picture from './Picture'
import NumPics from './NumPics'
//import Page from './Page'

import {
  getFilters
} from '../helpers/photoFuncs'


const instagramOptions = getFilters()
const instaInfo = instagramData.data


class Pictures extends Component {
//console.log(instagramOptions)
  constructor() {
    super()
    this.state= {
      instagramOption: "All",
      numMatches: "0",
      page: 1
    }
  }

  handleFilterChosen = (e) => {
    this.setState({
      instagramOption:e.target.value
    })
  }



 render() {
   const {instagramOption, page, numMatches } = this.state
    return (
      <div>
        <Select options={instagramOptions}  value={instagramOption} handleFilterChosen={this.handleFilterChosen} />
        <NumPics numMatches={numMatches} matchesFilter={numMatches} />
        <Picture InstagramData={instaInfo} className="picture_main" page={page} filterSelected={instagramOption}/>

      </div>
    )
 }
}
export default Pictures

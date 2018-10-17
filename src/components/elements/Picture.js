
import React from 'react'
import PictureHelp from "../helpers/PictureHelp"
//import filter_getter from "../helpers/filter_getter"
import Page from './Page'
import Button from './Button'

import {
  getFilters,
  filterPics,
  sortPics
} from '../helpers/photoFuncs'

//const theFilters = getFilters();
//const filterPics = filterPics();

class Picture extends React.Component{

// filter in pictures
  constructor(){
    super()
    this.state = {
      page: 1,
      startOfPicDisplay: 0,
      endOfPicDisplay: 6
      //likesSortDir: null
    }
  }
/*
  handleFilterChosen = (e) => {
    this.setState({
      instagramOption:e.target.value,
      instaInfo: filterPics(e.target.value),
      //numMatches: filterPics(e.target.value).length //instaInfo.length
    })
  //  console.log(instaInfo.length
  }
*/
    fwdBtnClick = (e) => {
      let { page, startOfPicDisplay, endOfPicDisplay} = this.state
        this.setState({
          page: page + 1,
          startOfPicDisplay: startOfPicDisplay + 6,
          endOfPicDisplay: endOfPicDisplay + 6
        })
        console.log(page)
        console.log(startOfPicDisplay)
      }

    bkBtnClick = (e) => {
      let { page, endOfPicDisplay, startOfPicDisplay } = this.state
      this.setState({
        page: page === 1 ? 1 : page - 1,
        endOfPicDisplay: endOfPicDisplay - 6,
        startOfPicDisplay: startOfPicDisplay - 6

      })
      console.log(page)
    }




  render() {
    const {InstagramData, filterSelected} = this.props
    const {page, startOfPicDisplay, endOfPicDisplay} = this.state
    //let start = 0
    //let end = 5
    //console.log(likesSortDir)

      //let filteredPics = filterPics(filterSelected)
      //console.log(InstagramData.length)
      //let InstagramDataSroted = sortPics(InstagramData)
      //console.log(InstagramData)
      //const sortedInstagramData = sortPics(InstagramData, likesSortDir)
      const Picture = InstagramData.map((InstagramDatum) => (
      <PictureHelp link={InstagramDatum.images.standard_resolution.url} description={InstagramDatum.caption ? InstagramDatum.caption.text : "im a picture"} key={InstagramDatum.link} username={InstagramDatum.user.username} likes={InstagramDatum.likes.count} comments={InstagramDatum.comments.count} time={InstagramDatum.created_time} filter={InstagramDatum.filter} hashtags={InstagramDatum.tags}/>
    )

)
      const PicturesByPage = Picture.slice(startOfPicDisplay, endOfPicDisplay)
      console.log(startOfPicDisplay, endOfPicDisplay)
      console.log(PicturesByPage)
    return (

      <div className="pictures">
        {PicturesByPage}
        <div className="fwd">
        <Button btnName="fwd" btnFunction={this.fwdBtnClick} className="fwd-btn"/>
      </div>
      <div className="bk">
        <Button btnName="bk" btnFunction={this.bkBtnClick} className="bk-btn"/>
      </div>

      </div>
    );
  }
}

export default Picture

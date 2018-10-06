
import React from 'react'
import PictureHelp from "../helpers/PictureHelp"
//import filter_getter from "../helpers/filter_getter"

import {
  getFilters,
  filterPics
} from '../helpers/photoFuncs'

const theFilters = getFilters();
//const filterPics = filterPics();

class Picture extends React.Component{
  render() {
    const {InstagramData, filterSelected, page} = this.props
      let filteredPics = filterPics(filterSelected)
      const Picture = filteredPics.map((InstagramDatum) => (
      <PictureHelp link={InstagramDatum.images.standard_resolution.url} description={InstagramDatum.caption ? InstagramDatum.caption.text : "im a picture"} key={InstagramDatum.link} username={InstagramDatum.user.username} likes={InstagramDatum.likes.count} comments={InstagramDatum.comments.count} time={InstagramDatum.created_time} filter={InstagramDatum.filter} hashtags={InstagramDatum.tags}/>
    )
)

    return (
      <div className="pictures">
        {Picture}
      </div>
    );
  }
}

export default Picture

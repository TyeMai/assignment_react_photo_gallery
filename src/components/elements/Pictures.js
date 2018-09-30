import React from 'react';
import PictureHelp from '../helpers/PictureHelp'

const Pictures = (props) => {
  //console.log(props)
  const {InstagramData} = props
  //console.log(InstagramData)
  console.log("yay i made it to the right datat")
  const Picture = InstagramData.map((InstagramDatum) => (

    <PictureHelp link={InstagramDatum.link} description={InstagramDatum.caption} key={InstagramDatum.link}/>
  ))

return (
  <div className='pictures'>
    {Picture}
  </div>
)

}

export default Pictures

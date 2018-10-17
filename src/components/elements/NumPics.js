import React from 'react';



const PicCounter = (props) => {

  const {numMatches} = props

//numMatches.length

return(
<p>
  Number of Matches: {numMatches}
</p>
)
}
export default PicCounter

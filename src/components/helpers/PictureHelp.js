import React from 'react';

const Picture = (props) => {
  const {link, description, username, time, likes, comments, filter,hashtags}  = props //.food ...restOfProps


  return (
    <div className="pictureAndInfo">
      <a href={link}><img src={link} alt={description} /></a>
      <p>Posted by: {username} </p>
      <p>Time posted: {time}</p>
      <p>Number of likes: {likes}</p>
      <p>Number of comments: {comments}</p>
      <p>Filter: {filter}</p>
      <p>HashTags: {hashtags}</p>
    </div>

  )
}

export default Picture

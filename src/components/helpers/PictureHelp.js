import React from 'react';

const Picture = (props) => {
  const {link, description}  = props //.food


  return (
    <img src={link} alt={description} />
  )
}

export default Picture

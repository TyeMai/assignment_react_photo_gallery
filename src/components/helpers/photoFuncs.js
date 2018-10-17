import instagramData from "/Users/tye/assignment_react_photo_gallery/src/photos";


export function getFilters() {
  let filters = instagramData.data.map(datam => {
    return datam.filter
  })


  filters = Array.from(new Set(filters)) //why no duplicates?
  filters.unshift('All')
  //console.log(filters)
  return filters;
}


export function filterPics(filter) {
  if (filter === 'All'){
    return instagramData.data
  } else {
    return instagramData.data.filter(datam => {
      return datam.filter === filter
  })
 }
}

export function sortPics(pictures,direction) {
  /*
  console.log(pictures)
  console.log(pictures[0].user.username)
  //pictures.likes.count.sort()
  return pictures.map(pic => {
    pic.likes.count
    function a - b
  })
 */
 console.log(direction)
  return pictures.sort(function(a,b) {
    if (direction === "descending"){
      //console.log(a.likes.count - b.likes.count)
      return a.likes.count - b.likes.count
    } else if (direction === "ascending") {
      return b.likes.count - a.likes.count
    } else {
        return null
    }
  })
}




export function searchPics(pictures, searchTerm) {
  //console.log('called serachpics')
  let caption;
  return pictures.filter(pic => {
    if (pic.caption) {
      //console.log(pic.caption.text)
      caption = pic.caption.text
    } else {
      //console.log("no text")
      caption = " "
    }
    let username = pic.user.username
    //console.log(caption)
    //console.log(username)
    return (caption.includes(searchTerm) || username.includes(searchTerm))
  })
}

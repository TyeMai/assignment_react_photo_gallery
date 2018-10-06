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

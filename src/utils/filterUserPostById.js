export function filterPostsById(arr, id) {
  return arr.filter(item => item.userId.toString() === id.toString());
}

export function filterAlbumsById(arr, id) {
  return arr.filter(item => item.userId.toString() === id.toString());
}

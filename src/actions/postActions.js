import { FETCH_POSTS, NEW_POSTS } from './types';

// thunk middleware allows us to call dispatch function directly to make async requests

export const fetchPosts = () => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    // dispatch the returned posts into store
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }));
}

export const createPost = (postData) => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_POSTS,
      payload: post
    }))
}

// export function fetchPosts() {
//   return function(dispatch) {
//     fetch('http://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       // dispatch the returned posts into store
//       .then(posts => dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       }));
//   }
// }
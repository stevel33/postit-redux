// evalutes any actions such as creating posts, or fetching posts

import { FETCH_POSTS, NEW_POST, DELETE_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

// evalutes what action type that we're dealing with
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // returns a copy of the current state, plus the items
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      }
    case DELETE_POST:
      return {
        ...state,
      }
    default:
      return state;
  }
}
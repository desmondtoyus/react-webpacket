

import { INPUT_CHANGE, FETCH_DATA } from '../actions/types';

const INITIAL_STATE = {
  value: '',
  search: '',
  results: [],
  err: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.prop]: action.value,
      };
    case FETCH_DATA:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
}



import { RESET_REDUCER } from '../actions/types';

const INITIAL_STATE = {
  value: '',
  search: '',
  results: [],
  err: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_REDUCER:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
}

import {DISPLAY_DATA} from './constant';
const initialState = {
  isData: [],
};
const authenticateReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_DATA:
      return {...state, isData: action.data};
    default:
      return {...state};
  }
};
export default authenticateReducer;

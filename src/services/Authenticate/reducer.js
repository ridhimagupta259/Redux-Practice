import {
  DISPLAY_DATA,
  SEARCH_DATA,
  SEARCH_FAIL,
  SEARCH_START,
  CONCEPT_DATA,
} from './constant';
const initialState = {
  isData: [],
  searchData: [],
  isloading: false,
  conceptData: [],
};
const authenticateReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISPLAY_DATA:
      return {...state, isData: action.data};
    case SEARCH_DATA:
      return {...state, searchData: action.data, isloading: false};
    case SEARCH_START:
      return {...state, isloading: action.data};
    case CONCEPT_DATA:
      return {...state, conceptData: action.data};
    default:
      return state;
  }
};
export default authenticateReducer;

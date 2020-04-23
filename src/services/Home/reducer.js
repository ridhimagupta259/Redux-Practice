import {TOGGLE_FLAG, LOGIN_START, LOGIN_SUCCESS} from './constant';
const initialState = {
  isLoading: false,
  header: '',
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {...state, isLoading: action.data};
    case LOGIN_SUCCESS:
      return {...state, isLoading: false, header: action.data};
    default:
      return state;
  }
};
export default homeReducer;

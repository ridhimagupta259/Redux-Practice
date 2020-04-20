import {
  TOGGLE_FLAG,
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from './constant';
const initialState = {
  isLoading: false,
  isFailed: false,
  isSuccess: false,
  token: '',
  header: '',
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {...state, isLoading: true};
    case LOGIN_FAILED:
      return {...state, isFailed: true};
    case LOGIN_SUCCESS:
      return {...state, isSuccess: true, header: action.data};
    default:
      return state;
  }
};
export default homeReducer;

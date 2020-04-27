import {
  TOGGLE_FLAG,
  LOGIN_START,
  LOGIN_SUCCESS,
  TOGGLE_SPLASH,
  TOGGLE_SUCCESS,
  LOGIN_FAILED,
} from './constant';
const initialState = {
  isLoading: 'false',
  isSuccess: 'false',
  header: '',
};
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {...state, isLoading: 'true'};
    case LOGIN_FAILED:
      return {...state, isSuccess: 'failed', isLoading: 'false'};
    case LOGIN_SUCCESS:
      return {
        ...state,
        isSuccess: 'true',
        isLoading: 'false',
        header: action.data.header,
      };
    case TOGGLE_SPLASH:
      return {
        ...state,
        header: action.data,
      };
    // case TOGGLE_SUCCESS:
    //   return {
    //     ...state,
    //     isSuccess: 'false',
    //     isLoading: 'false',
    //   };
    default:
      return state;
  }
};
export default homeReducer;

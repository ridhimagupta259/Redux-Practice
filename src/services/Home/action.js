import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  TOGGLE_SPLASH,
  TOGGLE_SUCCESS,
} from './constant';
import {AsyncStorage} from 'react-native';
import config from '../../config/env';
export const toggleSuccess = () => dispatch => {
  dispatch({
    type: TOGGLE_SUCCESS,
  });
};

export const toggleFlag = (username, password) => dispatch => {
  dispatch({
    type: LOGIN_START,
  });
  let apiConfig = config.apiURl;
  let pageURL = config.apiConfig.authenticationApi.loginUserHandle;
  fetch(apiConfig + pageURL, {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  }).then(response => {
    if (!(response.status === 200)) {
      //   Alert.alert('wrong credentials');
      dispatch({
        type: LOGIN_FAILED,
        data: {flag: false},
      });
    } else {
      var temp = response.headers.map.authorization.split(' ');
      dispatch({
        type: LOGIN_SUCCESS,
        data: {header: temp[1], flag: false},
      });
    }
  });
};

export const toggleSplash = () => async dispatch => {
  try {
    const value = await AsyncStorage.getItem('header');
    if (value !== null) {
      dispatch({
        type: TOGGLE_SPLASH,
        data: value,
      });
    }
  } catch (error) {
    console.log('error in getting token', error);
  }
};

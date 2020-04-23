import {LOGIN_START, LOGIN_FAILED, LOGIN_SUCCESS} from './constant';

export const toggleFlag = (username, password) => dispatch => {
  dispatch({
    type: LOGIN_START,
    data: true,
  });
  fetch(
    'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-security/login',
    {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    },
  ).then(responce => {
    let token = responce.headers.map.authorization;
    token = token.slice(7);
    console.log(token);
    dispatch({
      type: LOGIN_SUCCESS,
      data: token,
    });
  });
};

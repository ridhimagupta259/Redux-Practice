import {DISPLAY_DATA} from './constant';

export const dataApi = () => dispatch => {
  fetch(
    'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/stores',
    {
      method: 'GET',
      headers: {
        authorization:
          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJheGZvb2QiLCJleHAiOjE1ODc0NTU1NzV9.jFpYWeDWRSRfLwVP4ugCk9pJMhAk26vFsHKrluxJ_RE1KGxQ1INm89yu-Va7Cj3ZwIqE1Ml_SZNSAiVDraDujg',
      },
    },
  )
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      console.log(responseJson);
      dispatch({
        type: DISPLAY_DATA,
        data: responseJson,
      });
    });
};

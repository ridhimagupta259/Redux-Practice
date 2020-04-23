import {
  DISPLAY_DATA,
  SEARCH_DATA,
  SEARCH_START,
  CONCEPT_DATA,
} from './constant';

export const dataApi = head => dispatch => {
  fetch(
    'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/stores',
    {
      method: 'GET',
      headers: {
        authorization: head,
      },
    },
  )
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      //console.log(responseJson);
      dispatch({
        type: DISPLAY_DATA,
        data: responseJson,
      });
    });
};

export const searchApi = (keyword, head) => dispatch => {
  const url =
    'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/searchResults/' +
    keyword +
    '?';
  console.log(url);
  fetch(url, {
    method: 'GET',
    headers: {
      authorization: head,
    },
  })
    .then(response => {
      console.log(response);
      if (response.status === 200) {
        return response.json();
      } else {
        dispatch({
          type: SEARCH_START,
          data: true,
        });
      }
    })
    .then(searchJson => {
      //console.log(responseJson);
      dispatch({
        type: SEARCH_DATA,
        data: searchJson,
      });
    });
};

export const conceptApi = head => dispatch => {
  fetch(
    'https://admin-rel.priskoll.occdev.axfood.se/axfood/axfood-product-scan/concepts?',
    {
      method: 'GET',
      headers: {
        authorization: head,
      },
    },
  )
    .then(response => {
      return response.json();
    })
    .then(conceptJson => {
      console.log(conceptJson);
      dispatch({
        type: CONCEPT_DATA,
        data: conceptJson,
      });
    });
};

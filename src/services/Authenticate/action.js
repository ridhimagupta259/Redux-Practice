import {
  DISPLAY_DATA,
  SEARCH_DATA,
  SEARCH_START,
  CONCEPT_DATA,
} from './constant';
import config from '../../config/env';
export const dataApi = head => dispatch => {
  let apiConfig = config.apiURl;
  let storeURL = config.apiConfig.tempStoreApi.storeListHandle;
  fetch(apiConfig + storeURL, {
    method: 'GET',
    headers: {
      authorization: head,
    },
  })
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
  let apiConfig = config.apiURl;
  let searchURL = config.apiConfig.tempStoreApi.searchListHandle;
  const url = apiConfig + searchURL + keyword + '?';
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
  let apiConfig = config.conceptURL;
  let conceptsURL = config.apiConfig.tempStoreApi.conceptListHandle;
  fetch(apiConfig + conceptsURL, {
    method: 'GET',
    headers: {
      authorization: head,
    },
  })
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

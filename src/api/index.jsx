import { BASE_API_URL } from './config';

export const spotAPI = {
  fetch: async function (pageNumber) {
    const response = await fetch(
      `${BASE_API_URL}?$top=${pageNumber * 30}&$format=JSON`,
    )
      .then(function (response) {
        return response.json();
      })
      .catch((e) => {
        console.log(e);
      });
    return response;
  },
  get: async function (city, pageNumber) {
    const response = await fetch(
      `${BASE_API_URL}/${city}?$top=${pageNumber * 30}&$format=JSON`,
    )
      .then(function (response) {
        return response.json();
      })
      .catch((e) => {
        console.log(e);
      });
    return response;
  },
};

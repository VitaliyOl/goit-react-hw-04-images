import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const GetImages = async (query, page) => {
  // const params = new URLSearchParams({
  //   api_key: API_KEY,
  //   query: query,
  //   page: page,
  // });

  const API_KEY = '34499187-b966d60bee54df692b8f37eb6';

  const response = await axios.get(
    `?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

// const BASE_URL = `https://pixabay.com/api/`;
// const API_KEY = '34499187-b966d60bee54df692b8f37eb6';

// const getImages = (search, page = 1) => {
//   return fetch(
//     `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${search}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(new Error(`Something wrong, please try again `));
//   });
// };

// const api = {
//   getImages,
// };

// export default api;

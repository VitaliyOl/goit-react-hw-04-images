import axios from 'axios';

export const GetImages = async (query, page) => {
  try {
    const { data } = await axios.get('https://pixabay.com/api/', {
      params: {
        q: query,
        page: page,
        key: '34499187-b966d60bee54df692b8f37eb6',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

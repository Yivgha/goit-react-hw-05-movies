import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = "https://api.themoviedb.org/";
axios.defaults.params = {
    per_page: 12,
    orientation: 'horizontal',
    image_type: 'photo',
    key: '8e0288e6c002e9adeca41ab040f8eda1',
};

export async function ServiceAPI(q, page) {
    try {
        const res = await axios.get(`?q=${q}&page=${page}`);
        return res.data;
  } catch (error) {
        console.error(error);
    }
};
  
ServiceAPI.propTypes = {
  q: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
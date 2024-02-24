import axios from "axios";

const REST_API_BASE_URL = 'https://life-line-6pjv.onrender.com/api/donate';

export const listDonors = () =>{
    return axios.get(REST_API_BASE_URL);
}
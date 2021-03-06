import axios from "axios";

const BASE_URL = "https://randomuser.me/api/?results=";

export default {
  // Gets all users
  search: function (numResults) {
    return axios.get(BASE_URL + numResults);
  }
};
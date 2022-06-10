import axios from "axios";
import config from "config";

const get = async (endpoint: string) =>
  axios.get(config.api.url + endpoint, {
    withCredentials: true,
  });

const post = async <T>(endpoint: string, data: T | undefined) =>
  axios.post(config.api.url + endpoint, data, {
    withCredentials: true,
  });

export default {
  get,
  post,
};

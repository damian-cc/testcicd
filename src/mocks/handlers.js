import { rest } from "msw";
import config from "../config";
import { account, login, logout } from "./endpoints/account";

const { api } = config;

const getUrl = (endpoint) => {
  return api.url + endpoint;
};

const handlers = [
  rest.post(getUrl(api.login), login),
  rest.post(getUrl(api.logout), logout),
  rest.get(getUrl(api.account), account),
];

export default handlers;

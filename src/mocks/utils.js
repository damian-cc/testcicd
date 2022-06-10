// eslint-disable-next-line import/prefer-default-export
export const getAccount = (token, ctx) => {
  switch (token) {
    case "tgrbetvrbnhtynymu6575g24":
      return {
        email: "admin@gmail.com",
        group: "admin",
      };
    case "hntryh56uj46hg4v5ghy6g54":
      return {
        email: "user@gmail.com",
        group: "user",
      };
    default:
      ctx.status(418);
      return {};
  }
};

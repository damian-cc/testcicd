import { getAccount } from "../utils";

export const login = (req, res, ctx) => {
  const { email, password } = req.body;
  let data = {};
  let access_token;

  if (email === "admin@gmail.com" && password === "admin") {
    access_token = "tgrbetvrbnhtynymu6575g24";
    data = getAccount(access_token);
  } else if (email === "user@gmail.com" && password === "user") {
    access_token = "hntryh56uj46hg4v5ghy6g54";
    data = getAccount(access_token);
  } else {
    return res(
      ctx.status(422),
      ctx.json({ error_code: "invalid_credentials" })
    );
  }

  return res(
    ctx.cookie("access_token", access_token, {
      maxAge: 900000,
      secure: true,
      httpOnly: true,
      sameSite: "lax",
    }),
    ctx.status(200),
    ctx.json(data)
  );
};

export const logout = (req, res, ctx) => {
  if (res.cookies.access_token) {
    res.clearCookie("access_token");
    return res(ctx.status(200), ctx.json({ message: "logout_success" }));
  }

  return res(ctx.status(200), ctx.json({ message: "not_logged" }));
};

export const account = (req, res, ctx) => {
  const token = req.cookies.access_token;

  if (token) {
    return res(ctx.status(200), ctx.json(getAccount(token, ctx)));
  }
  return res(ctx.status(401));
};

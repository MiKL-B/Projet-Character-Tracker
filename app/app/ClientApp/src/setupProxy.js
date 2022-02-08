const createProxyMiddleware = require("http-proxy-middleware");
const { env } = require("process");

const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS
  ? env.ASPNETCORE_URLS.split(";")[0]
  : "http://localhost:47372";

<<<<<<< HEAD
const context = ["/weatherforecast", "/account", "/schema"];
=======
const context = ["/weatherforecast", "/account", "/personage", "/family"];
>>>>>>> 1075f54e25e0213cc16980206a1e0f88c10df12d

module.exports = function (app) {
  const appProxy = createProxyMiddleware(context, {
    target: target,
    secure: false,
  });

  app.use(appProxy);
};

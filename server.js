// server.js
const express = require("express");
const path = require("path");
const dev = process.env.NODE_ENV !== "production";
const next = require("next");
// const pathMatch = require("path-match");
const app = next({ dev });
const handle = app.getRequestHandler();
// const { parse } = require("url");

const server = express();
// const route = pathMatch();
server.use("/_next", express.static(path.join(__dirname, ".next")));
server.get("/", (req, res) => app.render(req, res, "/"));
server.get("/login", (req, res) => app.render(req, res, "/login"));
server.get("/register", (req, res) => app.render(req, res, "/register"));
server.get("/dashboard", (req, res) => app.render(req, res, "/dashboard"));
// server.get('/dogs/:breed', (req, res) => {
//   const params = route('/dogs/:breed')(parse(req.url).pathname)
//   return app.render(req, res, '/dogs/_breed', params)
// })
server.get("*", (req, res) => handle(req, res));

module.exports = server;

// const express = require("express");
// const next = require("next");
// const { parse } = require("url");

// const dev = process.env.NODE_ENV !== "production";
// const PORT = process.env.PORT || 3000;

// const app = next({ dir: ".", dev });
// const handle = app.getRequestHandler();

// const getRoutes = require("./routes");

// const routes = getRoutes();
// app.prepare().then(() => {
//   const server = express();
//   server.get("*", (req, res) => {
//     const parsedUrl = parse(req.url, true);
//     const { pathname, query = {} } = parsedUrl;
//     const route = routes[pathname];
//     if (route) {
//       return app.render(req, res, route.page, query);
//     }
//     return handle(req, res);
//   });

//   server.listen(PORT, err => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${PORT}`);
//   });
//   module.exports = server;
// });

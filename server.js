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

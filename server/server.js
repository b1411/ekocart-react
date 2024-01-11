import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";

const app = express();

app.get("/", (req, res) => {
    const entryPoint = ["/main.js"];

    const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>,
        {
            bootstrapScripts: entryPoint,
            onShellReady() {
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                pipe(res);
            },
            onShellError() {
                res.statusCode = 500;
                res.setHeader("Content-Type", "text/plain");
            },
        },
    );
});

app.listen(3002, () => {
    console.log("Server is listening on port 3002");
});

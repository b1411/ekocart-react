import React from "react";
import { renderToString } from "react-dom/server";

import App from "../../src/App";

const path = require("path");
const fs = require("fs");

const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");

export default function (req, res, next) {
    fs.readFile(filePath, "utf8", (err, htmlData) => {
        if (err) {
            console.error("err", err);
            return res.status(404).end();
        }

        const html = renderToString(<App />);

        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`,
            ),
        );
    });
}

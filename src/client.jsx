"use strict";

import React from "react";
import Table from "./components/Table";

let items = [
    {
        uuid: "1232jhkj4h2",
        taxonomy: [
            "card",
            "h-2"
        ],
        position: {
            x: 50,
            y: 50
        },
        rotation: {
            z: 45,
            x: 180
        }
    },
    {
        uuid: "iuoiu8n7n892",
        taxonomy: [
            "card",
            "d-5"
        ],
        position: {
            x: 150,
            y: 50
        },
        rotation: {
            x: 180
        }
    }
];


if (process && process.argv && process.argv[0]) {
    // We're running on the server; return a string
    module.exports = React.renderToString(<Table items={items} />);
} else {
    // We're running in a browser; attach to the DOM
    React.render(<Table items={items} />, document.body);
}

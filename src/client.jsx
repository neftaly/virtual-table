"use strict";

import React from "react";
import Baobab from "baobab";
import Table from "./components/Table";


let stateTree = new Baobab({
    items: [
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
    ]
});


let isomorphic = true;

if (process.browser || !isomorphic) {
    // We're running in a browser; attach to the DOM
    React.render(<Table cursor={stateTree} />, document.body);
} else {
    // We're running on the server; return a string for handlebars
    module.exports = React.renderToString(<Table cursor={stateTree} />);
}

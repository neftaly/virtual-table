"use strict";

import React from "react";
import Immstruct from "immstruct";
import Table from "./components/Table";


let state = new Immstruct({
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


let render = function() {
    React.render(<Table cursor={ state.cursor("items") } />, document.body);
};


render();
state.on("swap", render);

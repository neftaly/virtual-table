/*eslint no-unused-vars: 0 */

"use strict";

var React = require("react"),
    Card = require("./components/card/card");


let pieceStyle = {
    border: "1px solid rgba(0,0,0,.12)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.24)"
};


// Init
React.render(<div>
    <Card uuid="111" type="c-2" position={{}} rotation={{}} style={pieceStyle} />
    <Card uuid="222" type="c-3" position={{ x: 100 }} rotation={{}} style={pieceStyle} />
    <Card uuid="333" type="c-4" position={{ x: 200, y: 100 }} rotation={{ x: 180 }} style={pieceStyle} />
    <Card uuid="444" type="c-5" position={{ x: 300, y: 200 }} rotation={{ z: 45 }} style={pieceStyle} />
</div>, document.body);

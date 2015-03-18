"use strict";

import React from "react";
import Card from "./components/card";


let pieceStyle = {
    border: "1px solid rgba(0,0,0,.12)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.24)"
};


// Init
React.render(<div>
    <Card uuid="111" type="c-2" style={pieceStyle} position={{}} rotation={{ x: 180 }} />
    <Card uuid="222" type="c-3" style={pieceStyle} position={{ x: 100, y: 100 }} rotation={{ x: 180 }} active={true} />
    <Card uuid="333" type="c-4" style={pieceStyle} position={{ x: 200, y: 200 }} rotation={{ x: 180 }} />
    <Card uuid="444" type="c-5" style={pieceStyle} position={{ x: 300, y: 300 }} rotation={{ x: 180, z: 45 }} />
</div>, document.body);

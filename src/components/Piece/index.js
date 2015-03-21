/*eslint no-unused-vars:0 */
"use strict";

import React from "react";
import { shouldComponentUpdate } from "omniscient";


// Permitted table pieces
var Pieces = {
    "dummy": require("./Dummy"),
    "card": require("./Card")
};


/**
 * A game piece
 *
 * @extends React.ReactComponent
 * @class Piece
 * @constructor
 * @namespace components
 * @param {String} props.type
 * @param {Immstruct} props.cursor
 */
export default React.createClass({

    mixins: [{ shouldComponentUpdate }],

    render: function () {
        let cursor = this.props.cursor;
        let Piece = Pieces[this.props.type];
        return <Piece cursor={cursor} />;
    }

});

"use strict";

import React from "react";
import { shouldComponentUpdate } from "omniscient";

import Piece from "../components/Piece";

/**
 * A virtual table-top
 *
 * @extends React.ReactComponent
 * @class Table
 * @constructor
 * @namespace components
 * @param {Baobab} props.cursor
 */
export default React.createClass({

    mixins: [{ shouldComponentUpdate }],

    validPiece: function(itemCursor) {
        let uuid = itemCursor.cursor("uuid").deref();
        let type = itemCursor.cursor("taxonomy").cursor(0).deref();
        return <Piece key={uuid} type={type} cursor={itemCursor} />;
    },

    render: function () {
        let itemsCursor = this.props.cursor;

        return <div>
            { itemsCursor.toArray().map(this.validPiece) }
        </div>;
    }

});

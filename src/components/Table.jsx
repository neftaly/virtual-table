"use strict";

import React from "react";
import { shouldComponentUpdate } from "omniscient";

import Card from "../components/Card";

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

    piece: function(itemCursor) {
        let uuid = itemCursor.cursor("uuid").deref();
        return <Card cursor={itemCursor} key={uuid} />;
    },

    render: function () {
        let itemsCursor = this.props.cursor;

        return <div>
            { itemsCursor.toArray().map(this.piece) }
        </div>;
    }

});

"use strict";

import React from "react";
import { PureRenderMixin } from "react/addons";
import iterableCursor from "../modules/iterableCursor";
import instantiateComponent from "../modules/instantiateComponent";


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

    mixins: [PureRenderMixin],

    render: function () {
        let cursor = this.props.cursor;
        let itemCursor = cursor.select("items");
        let itemsCursors = iterableCursor(itemCursor);

        return <div>
            { itemsCursors.map(instantiateComponent) }
        </div>;
    }

});

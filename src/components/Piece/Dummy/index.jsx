"use strict";

import React from "react";
import { shouldComponentUpdate } from "omniscient";


/**
 * A dummy game piece, for tests and the like.
 *
 * @extends React.ReactComponent
 * @class Table
 * @constructor
 * @namespace components
 * @param {Immstruct} props.cursor
 */
export default React.createClass({

    mixins: [{ shouldComponentUpdate }],

    render: function () {
        let cursor = this.props.cursor;
        let status = (cursor.cursor() !== undefined) ? "pass" : "fail";

        return <div style="display:none">{ status }</div>;
    }

});

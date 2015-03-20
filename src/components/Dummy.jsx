"use strict";

import React from "react";


/**
 * Dummy component, for tests and the like.
 *
 * @extends React.ReactComponent
 * @class Table
 * @constructor
 * @namespace components
 * @param {Baobab} props.cursor
 */
export default React.createClass({

    render: function () {
        let cursor = this.props.cursor;
        let status = (cursor.get() !== undefined) ? "pass" : "fail";

        return <div>{ status }</div>;
    }

});

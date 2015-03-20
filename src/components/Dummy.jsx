"use strict";

import React from "react";
import { PureRenderMixin } from "react/addons";


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

    mixins: [PureRenderMixin],

    render: function () {
        let cursor = this.props.cursor;
        let status = (cursor.get() !== undefined) ? "pass" : "fail";

        return <div style="display:none">{ status }</div>;
    }

});

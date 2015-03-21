"use strict";

import React from "react";
import { shouldComponentUpdate } from "omniscient";
import transform from "../../modules/transform";
import buildCssClassName from "../../modules/buildCssClassName";

export default React.createClass({

    mixins: [{ shouldComponentUpdate }],

    render: function () {
        let itemCursor = this.props.cursor;
        let specs = itemCursor.toJS(); // TODO: Better ImmutableJS interaction

        let className = buildCssClassName(specs.taxonomy);
        let path = "./components/Card/res/";

        // Container-specific style (transformations, etc)
        let containerStyle = {
            transform: transform("translate", specs.position, "px")
                + transform("rotate", specs.rotation, "deg")
        };


        let move = () => {
            itemCursor.cursor("position").update("x", (x) => {
                return x + 10;
            });
        };


        return <div
            id={specs.uuid}
            style={containerStyle}
        className={className("component")} >

            <img
                src={`${ path }front/${ specs.taxonomy[1] }.jpg`}
            className={className("front")} />

            <div
                onClick={move}
            className={className("back")} />

        </div>;
    }

});

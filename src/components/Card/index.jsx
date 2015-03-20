"use strict";

import React from "react";
import { PureRenderMixin } from "react/addons";
import R from "ramda";
import transform from "../../modules/transform";

export default React.createClass({

    mixins: [
        PureRenderMixin
    ],

    render: function () {
        let props = this.props;
        let specs = props.cursor.get();

        let type = specs.taxonomy[1];
        let className = "component_" + specs.taxonomy[0];

        let style = {
            transform: transform("translate", specs.position, "px")
                + transform("rotate", specs.rotation, "deg")
        };

        let path = "./components/Card/res/";
        let frontImg = `${ path }front/${ type }.jpg`;
        let back = {
            backgroundImage: `url(${ path }back.svg)`,
            backgroundColor: "white"
        };

        return <div id={specs.uuid} className={"component " + className} style={style}>
            <img src={frontImg} className={className + "-front"} />
            <div style={back} className={className + "-back"} />
        </div>;
    }

});

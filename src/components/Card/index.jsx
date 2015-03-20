"use strict";

import React from "react";
import { PureRenderMixin } from "react/addons";
import R from "ramda";
import transform from "../../modules/transform";

export default React.createClass({

    mixins: [PureRenderMixin],

    render: function () {
        let props = this.props;
        let cursor = props.cursor;
        let specs = cursor.get();

        cursor.on("update", () => {
            this.forceUpdate();
        });

        let [kingdom, type] = specs.taxonomy;
        let className = "component_" + kingdom;

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


        let move = (e) => {
            console.log(e);
            cursor.select("position").select("x").edit(
                specs.position.x + 10
            );
        };


        return <div id={specs.uuid} className={"component " + className} style={style}>
            <img src={frontImg} className={className + "-front"} />
            <div style={back} className={className + "-back"} onClick={move} />
        </div>;
    }

});

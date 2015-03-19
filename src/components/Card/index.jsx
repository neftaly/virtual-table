"use strict";

import React from "react";
import R from "ramda";
import transform from "../../modules/transform";

import styles from "./styles";


export default class Card extends React.Component {

    render () {

        let props = this.props;
        let specs = props.specs;
        let path = "./components/Card/res/";

        let className = "highlight" + ((props.active) ? " active" : "");

        let frontImg = `${ path }front/${ specs.type[0] }.jpg`;
        let backImg = {
            backgroundImage: `url(${ path }back.svg)`,
            backgroundColor: "white"
        };

        let containerStyle = R.mergeAll([props.style, styles.container, {
            transform: transform("translate", specs.position, "px")
                + transform("rotate", specs.rotation, "deg")
        }]);

        return <div id={specs.uuid} className={className} style={containerStyle}>
            <img src={frontImg} style={styles.front}/>
            <div style={R.merge(styles.back, backImg)} />
        </div>;

    };

};

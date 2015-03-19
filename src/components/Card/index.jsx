"use strict";

import React from "react";
import R from "ramda";
import transform from "../../modules/transform";

import styles from "./styles";


export default class Card extends React.Component {

    render () {

        let props = this.props;
        let path = "./components/Card/res/";

        let className = "highlight" + ((props.active) ? " active" : "");

        let frontImg = `${ path }front/${ props.type }.jpg`;
        let backImg = {
            backgroundImage: `url(${ path }back.svg)`,
            backgroundColor: "white"
        };

        let containerStyle = R.mergeAll([props.style, styles.container, {
            transform: transform("translate", props.position, "px")
                + transform("rotate", props.rotation, "deg")
        }]);

        return <div id={props.uuid} className={className} style={containerStyle}>
            <img src={frontImg} style={styles.front}/>
            <div style={R.merge(styles.back, backImg)} />
        </div>;

    };

};

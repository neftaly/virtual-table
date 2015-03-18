"use strict";

var React = require("react"),
    styles = require("./styles"),

    transform = require("../../modules/transform");
let m = Object.assign;

module.exports = React.createClass({

    render: function () {

        let props = this.props;
        let path = "./components/card/res/";

        let frontImg = path + "front/" + props.type + ".jpg";
        let backImg = {
            backgroundImage: "url(" + path + "back.svg)",
            backgroundColor: "white"
        };

        let containerStyle = m(props.style, styles.container, {
            transform: transform("translate", props.position, "px")
                + transform("rotate", props.rotation, "deg")
        });

        return <div id={props.uuid} style={containerStyle}>
            <img src={frontImg} style={styles.front}/>
            <div style={m(styles.back, backImg)} />
        </div>;

    }

});

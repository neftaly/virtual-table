"use strict";

//var m = require("ramda").merge;
var m = Object.assign;

/**
 * Generate JSSS
 */
module.exports = (() => {

    // Card container
    let container = {
        top: 0,
        left: 0,
        width: "10em",
        position: "absolute",
        display: "inline-block",
        borderRadius: "1em",
        transformStyle: "preserve-3d"
    };

    // Front & back face
    let shared = {
        width: "100%",
        backfaceVisibility: "hidden",
        display: "inline-block",
        borderRadius: "inherit"
    };

    // Front face
    let front = m({
        transform: "rotateX(0deg)"
    }, shared);

    // Back face
    let back = m({
        left: 0,
        top: 0,
        height: "100%",
        position: "absolute",
        transform: "rotateY(180deg)",
        backfaceVisibility: "hidden",
        backgroundSize: "500%"
    }, shared);

    return {
        container,
        front,
        back
    };

}());

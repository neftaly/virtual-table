"use strict";

import React from "react";
import R from "ramda";
import Dummy from "../components/Dummy";
import Card from "../components/Card";


// Permitted Table components
var Components = {
    "dummy": Dummy,
    "card": Card
};


/**
 * Instantiate an item component, per item.taxonomy[0]
 *
 * @param {Baobab} cursor - Item cursor
 * @returns {ReactComponent}
 */
export default function instantiateComponent (cursor) {
    let item = cursor.get();

    let componentName = item.taxonomy[0];
    let Component = Components[componentName];
    if (!Component) {
        console.error("Unrecognised component:", componentName);
        return "";
    }

    return <Component cursor={cursor} key={item.uuid} />;
}

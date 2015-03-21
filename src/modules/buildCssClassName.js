"use strict";

import R from "ramda";


/**
 * Generate a CSS class name.
 * Curried.
 *
 * @param {Array} taxonomy
 * @param {String} postfix - name of element
 * @returns {String} class name
 */
export default R.curry((taxonomy, postfix) => {
    let delimiter = (postfix === "component") ? " " : "-";
    return "component_" + taxonomy[0] + delimiter + postfix;
});

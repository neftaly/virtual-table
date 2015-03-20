"use strict";

/**
 * Generate a CSS transformation directive
 *
 * @param {String} method - Transformation method
 * @param {Object} points - Transformation points (x, y, z)
 * @param {String} [unit] - Unit postfix
 * @returns {String} un-prefixed directive
 */
export default (method, points, unit) => {
    return Object.keys(points).reduce((directives, axis) => {
        let point = points[axis];

        if (!isNaN(point) && unit) {
            point = point + unit;
        }

        return directives
            + method + axis.toUpperCase()
            + `(${ point }) `;
    }, "");
};

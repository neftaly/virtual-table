"use strict";

/**
 * Generate a CSS transformation directive
 * @param {string} method - Transformation method
 * @param {object} points - Transformation points (x, y, z)
 * @param {string} [unit] - Unit postfix
 * @returns {string} un-prefixed directive
 */
module.exports = function transform (method, points, unit) {
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

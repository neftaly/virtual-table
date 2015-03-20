"use strict";

/**
 * Convert a cursor pointing at an array, into an array of cursors
 *
 * @param {Baobab} cursor
 * @returns {Array}
 */
export default function iterableCursor (cursor) {
    return Object.keys(cursor.get())
        .map((key) => cursor.select(key));
}

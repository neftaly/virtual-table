"use strict";

import alt from "./alt";
import TableActions from "../actions/TableActions";

//let merge = Object.assign;

// TODO: extend createStore ...
export default alt.createStore(class TableStore {
    constructor() {
        this.bindActions(TableActions);
        this.cards = {};
    }

    onCreate(blah) {
        let id = "card-" + Math.random();

        this.cards[id] = {
            id: id,
            type: "c-2",
            blah: blah
        };
    }

});

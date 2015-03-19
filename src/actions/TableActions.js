"use strict";

import alt from "./alt";

class TodoActions {
    constructor() {
        this.generateActions(
            //"translate",
            //"rotate",
            "create"
        );
    }
}

// TODO: extends ...
export default alt.createActions(TodoActions);

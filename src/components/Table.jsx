"use strict";

import React from "react";
import Card from "./Card";


export function buildComponent(item) {
    let [kingdom, ...type] = item.taxonomy;
    item.type = type;

    // Temporary
    let style = {
        border: "1px solid rgba(0,0,0,.12)",
        boxShadow: "0 4px 15px rgba(0,0,0,0.24)"
    };

    switch (kingdom) {
    case "card":
        return <Card specs={item} key={item.uuid} style={style} />;
    default:
        return "";
    }
}


export default class Table extends React.Component {
    render () {
        let props = this.props;

        return <div>
            { props.items.map(buildComponent) }
        </div>;
    };
};

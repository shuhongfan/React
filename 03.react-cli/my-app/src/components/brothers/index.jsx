import React from "react";
import Borther from "./borther";
import Borther2 from "./borther2";
export default class Index extends React.Component{
    render() {
        return (
            <div>
                <Borther></Borther>
                <hr/>
                <Borther2></Borther2>
            </div>
        );
    }
}

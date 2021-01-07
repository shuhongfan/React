import React from "react";
import Content from "./Content";
import Top from "./Top";


export default class App extends React.Component{
    render() {
        return (
            <div id="app">
                <Top></Top>
                <Content></Content>
            </div>
        );
    }
}

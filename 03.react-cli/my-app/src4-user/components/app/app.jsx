import React from "react";
import Serarch from "../search/serarch";
import Main from "../main/main";
import './main.css'

export default class App extends React.Component{
    state={
        searchName:''
    }
    setSearchName=(searchName)=>{
        this.setState({searchName})
    }
    render() {
        return (
            <div className="container">
                <Serarch setSearchName={this.setSearchName}></Serarch>
                <Main searchName={this.state.searchName}></Main>
            </div>
        )
    }
}

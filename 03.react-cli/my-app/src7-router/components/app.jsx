import React from "react";
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import About from '../views/about'
import Home from '../views/home'
import MyNavLink from "./MyNavLink";

export default class App extends React.Component{
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*<NavLink className="list-group-item" to="/about" activeClassName="activeClass">About</NavLink>*/}
                            {/*<NavLink className="list-group-item" to="/home" activeClassName="activeClass">HOME</NavLink>*/}
                            <MyNavLink className="list-group-item" to="/about">ABOUT</MyNavLink>
                            <MyNavLink className="list-group-item" to="/home">HOME</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/about" component={About}></Route>
                                    <Route path="/home" component={Home}></Route>
                                    <Redirect to="/about"></Redirect>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

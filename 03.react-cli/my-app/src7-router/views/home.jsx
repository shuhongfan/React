import React from "react";
import News from "./news";
import Message from "./message";
import MyNavLink from "../components/MyNavLink";
import {Switch,Route,Redirect} from 'react-router-dom'


export default class Home extends React.Component{
    render() {
        return (
            <div>
                <h3>home route component</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">news</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">meaasge</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path="/home/news" component={News}></Route>
                            <Route path="/home/message" component={Message}></Route>
                            <Redirect to="/home/news"/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

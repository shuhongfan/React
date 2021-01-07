import React from "react";

import {HashRouter,BrowserRouter,Route,Link} from 'react-router-dom'
import GoodsList from "./GoodsList";
import FoodsList from "./FoodsList";


export default class Index extends React.Component{
    render() {
        return (
            <HashRouter>
                <div>
                    <Link to="/goodslist">新闻列表</Link>
                    <Link to="/foodslist">食品列表</Link>
                    <div>
                        <Route path='/goodslist' component={GoodsList}></Route>
                        <Route path='/foodslist' component={FoodsList}></Route>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

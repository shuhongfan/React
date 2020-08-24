import React from "react";
import './NotFound.scss'
export default class NotFound extends React.Component{
    render() {
        return (
            <div className="g-bd g-bd-full">
                <div className="g-wrap">
                    <div className="n-for404">
                        <i className="u-errlg u-errlg-404"></i>
                        <p className="note s-fc3">很抱歉，你要查找的网页找不到</p>
                    </div>
                </div>
            </div>
        );
    }
}

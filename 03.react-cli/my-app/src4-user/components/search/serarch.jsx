import React from "react";
import PropTypes from 'prop-types'
export default class Serarch extends React.Component{
    static propTypes={
        setSearchName:PropTypes.func.isRequired
    }
    search=()=>{
        const searchName=this.input.value.trim()
        if (searchName){
            this.props.setSearchName(searchName)
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={input=>this.input=input} type="text" placeholder="enter the name you search"/>
                    <button onClick={()=>this.search()}>Search</button>
                </div>
            </section>
        )
    }
}

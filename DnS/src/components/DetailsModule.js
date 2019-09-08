import React, { Component } from 'react';
import axios from 'axios';
const END_POINT = `http://localhost:9000`

export default class DetailsModule extends Component{

        state = {
            firstName:"",
            lasttName:"",
            email:"",
            dateOfSignUp:""
        }
        getItem = () => {
            axios.get(END_POINT)
                .then(res => {
                    const data= res.data
                    this.setState({
                        items:data.category
                    })
                })
        }

    render (){

        return (

            <div>
                    <p>ItemName</p>
                    <p>category</p>
                    <p>type</p>
                    <p>location</p>
                    <p>locationDiscripation</p>
                    <p>isAvalible</p>
                    <p>firstName</p>
                    <p>phone</p>
                    <p>itemDesctiption</p>
                    <p>img</p>
            </div>
        )
    }
}
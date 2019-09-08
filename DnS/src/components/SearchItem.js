import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
const END_POINT = `http://localhost:9000`

export default class SearchItem extends Component {

    state = {
        items: [],
        NewItem: {},
        ListOfItem: ''
    }



    seacrhHandler = (e) => {
        e.preventDefault();
        let input = document.getElementById("input").value;
        console.log('input', input);
        if (input === "") {
            alert("Write in Search bar to show Items!")
        }
        else {
            this.props.SearchItemHandler({ input });

        }
    }

    render() {

        return (

            <div className="d-flex justify-content-center m-2">
                <form onSubmit={this.seacrhHandler}>
                    <input type="text" placeholder="Search any things ....."
                        id="input"

                    />
                    <Link to="/ItemMapSlice">
                        <button type="submit">Search</button>
                    </Link>
                </form>

            </div>

        )
    }
}
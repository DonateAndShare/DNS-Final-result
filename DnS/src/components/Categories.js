import React, { Component } from 'react';
import axios from 'axios'


export default class Categories extends Component {

  onClick = (e) => {
    let category = e.target.text
    axios.get(`http://localhost:9000/category/search/${category}`)
      .then(res => {

        this.props.appState(res.data)
        // console.log(res.data)
        // this.setState({searchResult: res.data})
      })
  }
  render() {
    return (
      <>
        <div style={{ width: "65%" }}>
          <div >
            <div class="list-group" id="list-tab" role="tablist">
              <a onClick={this.onClick} class="list-group-item list-group-item-action active" data-toggle="list" href="#list-settings">All Categories</a>
              <a onClick={this.onClick} class="list-group-item list-group-item-action" data-toggle="list" href="#list-settings" >Electronics</a>
              <a onClick={this.onClick} class="list-group-item list-group-item-action" data-toggle="list" href="#list-settings" >Home & Garden</a>
              <a onClick={this.onClick} class="list-group-item list-group-item-action" data-toggle="list" href="#list-settings" >books</a>
              <a onClick={this.onClick} class="list-group-item list-group-item-action" data-toggle="list" href="#list-settings" >Sports</a>
              <a onClick={this.onClick} class="list-group-item list-group-item-action" data-toggle="list" href="#list-settings" >Health & Beauty</a>
              <a onClick={this.onClick} class="list-group-item list-group-item-action" data-toggle="list" href="#list-settings" >Toys & Kids</a>
              <a onClick={this.onClick} class="list-group-item list-group-item-action" data-toggle="list" href="#list-settings" >Others</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
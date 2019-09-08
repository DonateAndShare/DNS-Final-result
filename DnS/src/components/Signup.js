import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Singup extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    phone: '',
    email: '',
    birthday: '',
    password: ''

  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  handleChange = date => {
    this.setState({
      birthday: date
    });
  };

  onClick = (newuser) => {
    axios.post('http://localhost:9000/signup/users', newuser)
      .then(res => {
        console.log(res.data)
        this.setState({ checkUser: res.data })
      })
  }




  postuser = (user, username) => {
    axios.get(`http://localhost:9000/signup/checkUsers/${username}`)
      .then(res => {
        if (res.data.length === 0) {
          alert("will post")
          axios.post('http://localhost:9000/signup/users', user)
            .then(res => {
              console.log(res.data)
              this.state = res.data
            })
        }
        else {
          alert("The username is already Exist ")
        }
      })
  }

  onSubmit = (e) => {
    e.preventDefault();
  }



  render() {
    return (
      <>
        <form onSubmit={this.onSubmit} style={{ margin: '0 auto', width: '50%' }}>
          <div className="form-group row">
            <label for="staticEmail" className="col-sm-4 col-form-label">First Name</label>
            <div className="col-sm-8">
              <input onChange={this.onChange} className="form-control" name='firstName' placeholder='First Name' type='text' ></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="staticEmail" className="col-sm-4 col-form-label">Last Name</label>
            <div className="col-sm-8">
              <input onChange={this.onChange} name='lastName' placeholder='Last Name' type='text' ></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="staticEmail" className="col-sm-4 col-form-label">User Name</label>
            <div className="col-sm-8">
              <input onChange={this.onChange} name='username' placeholder='Username' type='text' ></input>
            </div>
          </div>
          <div className="form-group row">
            <label for="staticEmail" className="col-sm-4 col-form-label">Phone Number</label>
            <div className="col-sm-8">
              <input onChange={this.onChange} name='phone' placeholder='Phone Number' type='number' ></input>
            </div>
          </div><div className="form-group row">
            <label for="staticEmail" className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-8">
              <input onChange={this.onChange} name='email' placeholder='email@example.com' type='email' ></input>
            </div>
          </div><div className="form-group row">
            <label for="staticEmail" className="col-sm-4 col-form-label">Date og Birth</label>
            <div className="col-sm-8">
              <DatePicker selected={this.state.birthday} onChange={this.handleChange} />
            </div>
          </div><div className="form-group row">
            <label for="staticEmail" className="col-sm-4 col-form-label">Password</label>
            <div className="col-sm-8">
              <input onChange={this.onChange} name='password' placeholder='Password' type='password' ></input>
            </div>
          </div>
          <Link to='/users'>
            <button className="btn btn-primary mb-2" onClick={this.onClick.bind(this, this.state.users)} type='submit'>Signup</button>
            {/* {console.log(this.state.users)} */}
          </Link>

        </form>
        <button onClick={this.postuser.bind(this, this.state, this.state.username)} >get users</button>
      </>
    )
  }
}

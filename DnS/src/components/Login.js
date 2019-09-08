import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'



export default class Login extends Component{

  state = {
    username: '',
    password: '',
    user:[]
  }


   checkLogin = (e) => {
  // this.setState({isvaled:<h1>hello</h1>})
    // this.props.users.map(elem => {
    //   if(e.target.name === 'username'){
    //     console.log(e.target.value)
    //     console.log(elem.username)
    //     // console.log('it dosent match!!')
    //     this.state.username = e.target.value;
    //   }else{
    //     let text = 'The password is incorrect! '
    //     return text
    //   }
    //   if(e.target.name === 'password' ){
    //     // alert('The password is incorrect! ')
    //     // console.log('The password is incorrect! ')
    //     console.log(e.target.value)
    //     this.state.password = e.target.value 
    //   }
    //   // console.log(obj)
    //   if(this.state.username === elem.username && this.state.password === elem.password){
    //     alert('Go to the next page!')
    //   }
    // })
    this.setState({ [e.target.name]: e.target.value })
      console.log(this.state)
  }

  Login = (username, password) => {
    console.log(username)
    axios.get(`http://localhost:9000/login/${username}/${password}`)
    .then(res => {
      console.log(res.data)
      if(res.data.length !== 0){
        this.setState({user: res.data})
        alert (" loged in ")
      }else(
        alert("no such user")
      )
      // this.setState({checkUser: res.data})
    })
     
    console.log(this.state.user)
  }


    render(){
        return(
            <>
            <form>
              <input name='username' type='text' placeholder='Email or Username' onChange={this.checkLogin}></input>
              <input name='password' type='password' placeholder='Password' onChange={this.checkLogin}></input>
            </form>
            <Link to= '/users'>
              <button onClick={this.Login.bind(this, this.state.username, this.state.password)}>Login</button>
              </Link>

              <a href = 'mailto: DonateAndShare@gmail.com' >Forget Password!</a>
            </>
        )
    }

}

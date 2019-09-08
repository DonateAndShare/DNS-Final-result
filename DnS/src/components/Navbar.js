import React, { Component } from 'react'
import Signup from './Signup'
import Login from './Login'


import { Link } from 'react-router-dom'
import { thisTypeAnnotation } from '@babel/types';

export class Navbar extends Component {
  state = {
    hide: false

  }
  onClick = () => {
    this.setState({ hide: true })
  }

  render() {
    const styleForSignUp = (this.state.hide || this.props.user.username) ? { display: 'none' } : {};
    const styleForlogIN = this.props.user.username ? { display: 'none' } : {};
    const styleForlogOut = this.props.user.username ? {} : { display: 'none' };
    const styleFormyitem = this.props.user.username ? {} : { display: 'none' };
    //  const styleForadditem =this.props.user.username ? {}:{display :'none'};


    return (
      <>
        <nav className="navbar  sticky-top navbar-light bg-light ">

          <Link to="/">
            <button className="btn btn-outline-info">Home</button>
          </Link>
          <div className="float-right">
            <Link style={styleFormyitem} exact to="/users/addItem">
              <button className="btn btn-outline-info float-right">AddItem</button>

            </Link>

            <Link style={styleFormyitem} onClick={this.props.setMyItem} to="/ItemMapSlice" >
              <button className="btn btn-outline-info float-right">myItem</button>

            </Link>

            <Link style={styleForlogOut} onClick={this.props.setLogOut} to="/" >
              <button className="btn btn-outline-danger float-right">logout</button>
            </Link>


            <Link style={styleForlogIN} to='/login'>
              <button className="btn btn-outline-success float-right" type="button">login </button>
            </Link>

            <Link style={styleForSignUp} to='/signup'>
              <button className="btn btn-outline-info float-right " type="button" onClick={this.onClick} >signup </button>
            </Link>
            {/* <Signup /> */}
          </div>
        </nav>
      </>
    );
  }
}


export default Navbar
// style={{"display": "none"}}
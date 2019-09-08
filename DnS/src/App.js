import React from 'react';
import Navbar from './components/Navbar';
import MyItem from './components/MyItem'
import Categories from './components/Categories'

// import ShortDetails from './components/ShortDetails'

import Singup from './components/Signup';
import Login from './components/Login'
import Additem from './components/AddItem';
import SearchItem from './components/SearchItem';
import ItemMapSlice from './components/ItemMapSlice'
import { BrowserRouter as Router, Swich, Route } from 'react-router-dom'
import User from './components/User';
import DetialsMapModule from './components/DetialsMapModule'
import axios from 'axios';

const END_POINT = `http://localhost:9000`;

class App extends React.Component {
  state = {
    items: [],
    user: {
      _id: "5d6d297e67298e183fc7ae2c",
      items: [
        {
          itemName: 'Donats ',
          itemDescription: 'new book',
          category: 'books',
          type: 'donets',
          phone: 799333626,
          location: 'amman',
          locationDescription: 'jam3a',
          isAvalible: true,
          image: ''
        }, {
          itemName: 'batata ',
          itemDescription: 'new book',
          category: 'books',
          type: 'donets',
          phone: 799333626,
          location: 'amman',
          locationDescription: 'jam3a',
          isAvalible: true,
          image: ''
        }
      ],
      firstName: 'haya',
      lasttName: 'fraij',
      username: 'haya96',
      phone: 962799333626,
      email: 'hayafraij@gmail.com',
      birthday: '2019-09-01T17:06:32.227Z',
      password: 'Ab123456',
      dateOfSignUp: '2019-09-01T17:06:32.227Z',
      isLogin: false,
      __v: 0
    }
  }


  SearchItemHandler = (input) => {
    console.log('input', input)
    axios
      .get(`${END_POINT}/searchResult/search/${input.input}`)
      .then(res => {
        const data = res.data
        console.log('data', data)
        this.setState({
          items: {
            data
          }
        });
        if (data.length === 0) { alert("No Result found Pleses Seacrh Again") }
      })
      .catch(err => {
        console.log(err);
      });

  }

  setMyItem = () => {
    console.log('done setMyItem')
    this.setState({ item: this.state.user.items })

  }
  setLogOut = () => {
    console.log('done setMyItem')
    this.setState({ user: {} })
  }

  searchItem = (resultSearch) => {
    this.setState({ items: resultSearch })
    console.log(this.state.items)
  }

  render() {
    return (
      <>
        <Router>
          <Navbar setLogOut={this.setLogOut} user={this.state.user} setMyItem={this.setMyItem} />
          <SearchItem SearchItemHandler={this.SearchItemHandler} />
          <div className="contener">
            <div className="raw">
              <div className="col-xl-4">

                <Categories appState={this.searchItem} />
              </div>
              <div className="col-xl-8">

                <Route path="/users" component={props => (<User {...props} user={this.state.user} />)} />
                <Route path="/users/addItem" component={props => (<Additem {...props} user={this.state.user} />)} />
                {/* <Route path="/users/MyItem" component={props =>(<MyItem {...props} user={this.state.user}/>)}/>  */}
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Singup} />
                <User user={this.state.user} />

                <Route path="/ItemMapSlice" component={props => (<ItemMapSlice {...props} items={this.state.user.items} />)} />
              </div>
            </div>

            {/* <ItemMapSlice users = {this.state.user.items}/> */}
          </div>
        </Router>

        {/* <ShortDetails/>
        <SearchItem/>
      <DetailsModule/> */}

      </>
    );

  }
}

export default App;

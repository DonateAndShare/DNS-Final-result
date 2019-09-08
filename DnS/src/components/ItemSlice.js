import React, { Component } from 'react';
// import StarRatings from 'react-star-ratings';
import axios from 'axios';
const END_POINT = `http://localhost:9000`;

export default class itemSlice extends Component {
  state = {
    
    item:{
    date: "",
    Tiltle:"",
    rating: 0,
    img:"",
    category:'',
    phone:"",
    location:"",
    isAvalible:"",
    itemDescription:""
  }

  
};

componentWillUpdate(nextProps, nextState) {
  console.log('object', this.peops.items);
  this.setState({item:this.peops.items})
}
getItem = () => {
    axios
      .get(END_POINT)
      .then(res => {
        const data=res.data
          this.setState({item: {
            ...data.item,
    date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
            Tiltle:data.Tiltle,
            img:data.img,
            category:data.category
          } });
      })
      .catch(err => {
        console.log(err);
      });
  };
  // let array=[];
  // res.data.map(ele=>{
  // array.push(ele.items)
  // })
 

  changeRating=( newRating,name)=> {
    console.log(newRating)
    console.log(name)
    this.setState({
     item:{...newRating.item,
            rating:newRating,
    date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),

    } 
    });
  }

  render() {
    const { items } = this.props;
    return (

      
      <div style={{border: "2px solid black"}}>
        <p>{items.itemName}</p>
        <img />
        {/* <StarRatings
          // rating={items.rating}
          starRatedColor="orange"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
          starDimension="15px"
          starSpacing="0px"

        /> */}
        <p>category:{items.category}</p>
          
        <p> phone:{items.phone}  </p>
    <p>location:{items.location}</p>
    <p>  isAvalible:{items.isAvalible}</p>
    <p>itemDescription:{items.itemDescription}</p>


        <p >date:{items.date}</p>




      </div>

    )
  }
}

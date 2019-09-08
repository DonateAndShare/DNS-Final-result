import React, { Component } from 'react';
// import ItemMapSlice from './ItemMapSlice'
class MyItem extends Component{
    state ={
        user:{ },
        item:[]
      
      }
    //   componentWillMount() {
    //     this.setState({user:this.props.user})
    //     console.log(this.state)
    //   }
    async componentDidMount() {
       await this.setState({user:this.props.user})
    console.log(this.state)

}


    render(){
        return(
            <>

           <h6>{this.state.user.firstName}</h6>
          
  
            </>
        )
    }
}
export default MyItem;
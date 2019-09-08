 import React, { Component } from 'react'
 import ItemSlice from './ItemSlice'
export default class ItemMapSlice extends Component {
    render() {
        const {items}= this.props
        return (
            <div>
                {console.log('items', items)}
               {items.map((items,idx)=>{
                  return <ItemSlice key={idx} items={items} />
               })} 
            </div>
        )
    }
}

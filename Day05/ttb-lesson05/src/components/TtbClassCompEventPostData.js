import React, { Component } from 'react'

export default class TtbClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }
    //Ham xu li su kien 
    ttbEventHandleClick =()=>{
        //cuyen du lieU len app thong qua props
        this.props.onTtbDataToApp("Du lieu tu Components con  - TtbClassCompEventPostData")
    }
   
  render() {
    return (
      <div className='alert alert-success'>
        <button className='btn btn-primary mx-1' onClick={this.ttbEventHandleClick}>Button 1 - Chuyen du lieu tu App</button>
      </div>
    )
  }
}

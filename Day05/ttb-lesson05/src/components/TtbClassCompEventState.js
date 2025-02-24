import React, { Component } from 'react'

export default class TtbClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            ttbFullName:"Tran The Binh",
            ttbAge:20,
        }
    }
    //ham xu li su  kien 
    ttbEventHandleClick1 = ()=>{
        // lay du lieu trong sate
        alert("FullName:" +this.state.ttbFullName + "\n Age:" +this.state.ttbAge);
    }
  render() {
    return (
      <div className='alert alert-danger'>
            <button className='btn btn-primary' onClick={this.ttbEventHandleClick1}>Button 1 - Du lieu trong state</button>
            
      </div>
    )
  }
}

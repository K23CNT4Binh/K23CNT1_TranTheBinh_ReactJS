import React, { Component } from 'react'

export default class TtbClassCompEvent1 extends Component {
    //Ham xu lis su kien 
    ttbEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }
    ttbEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name="+name);
    }
  render() {
    return (
      <div className='alert alert-info'>
        <button className='btn btn-primary mx-1' onClick={this.ttbEventHandleClick1}>Button 1</button>
        <button className='btn btn-success mx-1' onClick={()=>this.ttbEventHandleClick2("Binh Gold")}>Button 2</button>
      </div>
    )
  }
}

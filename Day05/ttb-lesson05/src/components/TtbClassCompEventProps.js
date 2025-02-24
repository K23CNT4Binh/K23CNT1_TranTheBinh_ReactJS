import React, { Component } from 'react'

export default class TtbClassCompEventProps extends Component {
        ttbEventHandleClick1 = ()=>{
        alert ("Hello....."+this.props.ttbRenderTitle);

    }
    
    
    
  render() {
    return (
      <div className='alert alert-info'>
        <button className='btn btn-primary mx-1' onClick={this.ttbEventHandleClick1}>Button 1</button>
      
      </div>
    )
  }
}

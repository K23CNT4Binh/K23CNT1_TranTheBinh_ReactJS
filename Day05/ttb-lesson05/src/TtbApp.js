import React, { Component } from 'react'
import TtbFuncCompEvent1 from './components/TtbFuncCompEvent1'
import TtbClassCompEvent1 from './components/TtbClassCompEvent1'
import TtbFuncCompEventProps from './components/TtbFuncCompEventProps'
import TtbClassCompEventProps from './components/TtbClassCompEventProps'
import TtbClassCompEventState from './components/TtbClassCompEventState'
import TtbClassCompEventPostData from './components/TtbClassCompEventPostData'


export default class TtbApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      ttbNoiDung:"Chua co",
    }
  }
  //ham xu li su kien khi component con chuyen du lieu len
  ttbHandleDatatoApp = (content)=>{
    alert(content);
    this.setState()
  }

  render() {
    return (
      <div className='container border mt-3'>
          <h1 className='text-center alert alert-info my-2'>K23CNT1 - Tran The Binh - Event and From</h1>
          <hr/>
          <div>
            <h2>Function Component - Event</h2>
              <TtbFuncCompEvent1 />
          </div>
          <hr/>
          <div>
            <h2>Class Component - Event</h2>
            <TtbClassCompEvent1 />
          </div>
          <div>
            <h2>Function Component - Event; props</h2>
           <TtbFuncCompEventProps ttbRenderName="Binh Gold" />
          </div>
          <div>
          <h2>Class Component - Event</h2>
            <TtbClassCompEventProps ttbRenderTitle = "Welcome to Binh Gold" />
          </div>
          <div>
          <h2>Class Component - Event; State</h2>
          <TtbClassCompEventState />
          </div>
          <div>
            <h1>{this.state.ttbNoiDung}</h1>
          <h2>Class Component - Event; Post Data to App</h2>
         <TtbClassCompEventPostData onTtbDataToApp={this.ttbHandleDatatoApp} />
          </div>
         
      </div>
    )
  }
}

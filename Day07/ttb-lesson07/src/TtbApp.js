import React, { Component } from 'react'
import TtbRenderCondition from './componnents/TtbRenderCondition'
import TtbRenderList from './componnents/TtbRenderList'
import TtbRenderListStudent from './componnents/TtbRenderListStudent'

export default class TtbApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center'>Tran The Binh - Lesson07 - Render Condition - Render List Key</h1>
        <hr/>    
        <TtbRenderCondition />
        <hr/> 
        <TtbRenderList/>
        <hr/> 
        <TtbRenderListStudent/>
      </div>
    )
  }
}

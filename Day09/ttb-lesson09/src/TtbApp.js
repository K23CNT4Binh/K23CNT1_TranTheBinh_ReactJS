import React, { Component } from 'react'
import TtbUseState from './components/TtbUseState'
import TtbUseStateListObject from './components/TtbUseStateListObject'
import TtbUseEffect1 from './components/TtbUseEffect1'

export default class TtbApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center'>React Hook</h1>
        <hr/>
        <TtbUseState/>
        <TtbUseStateListObject/>

        <TtbUseEffect1/>
      </div>
    )
  }
}

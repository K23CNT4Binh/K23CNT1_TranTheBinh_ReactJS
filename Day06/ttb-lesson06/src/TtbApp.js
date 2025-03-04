import React, { Component } from 'react'
import TtbEventFrom1 from './components/TtbEventFrom1';
import TtbEventFrom2 from './components/TtbEventFrom2';
import TtbEventFrom3 from './components/TtbEventFrom3';
import TtbEventFrom4 from './components/TtbEventFrom4';
import TtbEventFrom5 from './components/TtbEventFrom5';

export default class TtbApp extends Component {
  
  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'>Event From  - Demo</h1>
        <hr/>
        <TtbEventFrom1 />
        <hr/>
        <TtbEventFrom2 />
        <hr/>
        <TtbEventFrom3 />
        <hr/>
        <TtbEventFrom4 />
        <hr/>
        <TtbEventFrom5 />
      </div>
    )
  }
}

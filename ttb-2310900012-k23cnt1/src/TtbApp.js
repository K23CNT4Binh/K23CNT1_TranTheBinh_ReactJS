import React, { Component } from 'react'
import TtbAccountList from './components/TtbAccountList'
import TtbAccoountAdd from './components/TtbAccoountAdd'

export default class TtbApp extends Component {
  render() {
    return (
      <div className='container border mt-3 '>
        <h1 className='text-center'>Danh sách tài khoản</h1>
        <hr/>
        <TtbAccoountAdd/>
        <TtbAccountList/>
       
      </div>
    )
  }
}

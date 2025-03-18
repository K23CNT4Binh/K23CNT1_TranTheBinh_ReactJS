import React from 'react'
import TtbReactApiLocal from './components/TtbReactApiLocal'
import TtbMockAPI from './components/TtbMockAPI'
import TtbCreateMockAPI from './components/TtbCreateMockAPI'

export default function TtbApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='text-center alert alert-info'> ReachJS - API - Binh Gold</h1>
      <hr/>
      <TtbReactApiLocal/>
      <hr/>
      <h2>Đọc dữ liệu từ MockAPI </h2>
      <hr/>
      <TtbMockAPI/>
      <hr/>
      <TtbCreateMockAPI/>
    </div>
  )
}

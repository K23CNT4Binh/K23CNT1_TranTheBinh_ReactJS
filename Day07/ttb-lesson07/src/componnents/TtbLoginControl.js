import React from 'react'
import TtbLoginComp from './TtbLoginComp'
import TtbLogoutComp from './TtbLogoutComp'

export default function TtbLoginControl(props) {
    const ttbElement = props.isLoggedIn ? <TtbLoginComp /> : <TtbLogoutComp />

    // const ttbLogin = ()=>{
    //     if(props.isLoggedIn)
    //         return <TtbLogoutComp />
    //     else
    //         return <TtbLoginComp />
    // }

  return (
    <div>
      {ttbElement}
    </div>
  )
}
import React from 'react'
import { Link } from "react-router-dom";


export default function TtbNavBar() {
  return (
   <nav>
    <Link to='/' >Home</Link> |
    <Link to='ttb-list-user/' >List User</Link> |
    <Link to='ttb-create-user/' >Create User</Link>
   </nav>
  )
}


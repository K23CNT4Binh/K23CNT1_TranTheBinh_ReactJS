import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function TtbMockAPI() {
    //khoi tao state
    const[ttbListUser, setTtbListUser] = useState([])
    //api
    const ttbApiOnline ="https://67d97bed00348dd3e2ab49bc.mockapi.io/K23CNT1_TranTheBinh/ttb_users"
    //doc du lieu tu api bang axios
    useEffect(()=>{
        axios
            .get(ttbApiOnline)
           .then((ttb_response)=>{
                setTtbListUser(ttb_response.data)
           })
           .catch((error)=>{
            console.log("Loi phat sinh")
           })
    },[])
    //view data
    const ttbElementUser = ttbListUser.map((ttb_item, index)=>{
        return(
            <tr>
                <td>{ttb_item.ttbid}</td>
                <td>{ttb_item.ttbfullName}</td>
                <td>{ttb_item.ttbAge}</td>
                <td>{ttb_item.ttbActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button className='btn btn-primary mx-1'>Sửa</button>
                    <button className='btn btn-danger mx-1'>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sach</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>id</th>
                <th>FullName</th>
                <th>Age</th>
                <th>Active</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                ttbElementUser
            }
        </tbody>
      </table>
    </div>
  )
}

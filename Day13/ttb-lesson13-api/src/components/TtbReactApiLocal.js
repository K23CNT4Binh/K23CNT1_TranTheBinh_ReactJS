import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TtbReactApiLocal() {
    //khoi tao state
    const[ttbListUser, setTtbListUser] = useState([])
    //doc du lieu tu api local va set cho ttblistuser
    const apiUrl = "http://localhost:3002/users"
    //lay danh sach tu apiurl
    useEffect(()=>{
        axios
        .get(apiUrl)
        .then((ttbResphone)=>{
            setTtbListUser(ttbResphone.data)
        })
        .catch((error)=>{
            console.log("Loi");
        })
    },[])
  return (
    <div>
      <h2>Đọc dữ liệu từ API Local</h2>
      <table className='table table-bordered'>
        <thead>
            <tr>
                <th>FullName</th>
                <th>Age</th>
                <th>Class</th>
            </tr>
        </thead>
        <tbody>
            {
                ttbListUser.map((ttbItem, index)=>{
                    return(
                        <tr>
                            <td>{ttbItem.fullName}</td>
                            <td>{ttbItem.age}</td>
                            <td>{ttbItem.class}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

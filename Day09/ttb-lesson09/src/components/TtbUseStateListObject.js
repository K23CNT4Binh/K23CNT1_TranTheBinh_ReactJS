import React from 'react'
import { useState } from 'react';


export default function TtbUseStateListObject() {
    //mock data
    const listStudent = [
        {ttbId:"SV001",ttbName:"Trần Thế Bình", ttbEmail:"tranthebinh@gmail.com", ttbAmount:"1000"},
        {ttbId:"SV002",ttbName:"Nguyễn Quang A", ttbEmail:"nguyenvana@gmail.com", ttbAmount:"2000"},
        {ttbId:"SV003",ttbName:"Nguyễn Quang B", ttbEmail:"nguyenvanb@gmail.com", ttbAmount:"3000"},
        {ttbId:"SV004",ttbName:"Nguyễn Quang C", ttbEmail:"nguyenvanc@gmail.com", ttbAmount:"4000"},
    ];
    //tao state voi hook
    const [ttbStudents, setTtbStudents] = useState(listStudent);
// render data
let ttbElement = ttbStudents.map((ttbItem, index)=>{
    return(
        <tr>
            <td>{index+1}</td>
            <td>{ttbItem.ttbId}</td>
            <td>{ttbItem.ttbName}</td>
            <td>{ttbItem.ttbAge}</td>
            <td>{ttbItem.ttbClass}</td>
            <td>
                <button>Sửa</button>
                <button>Xóa</button>
            </td>
        </tr>
    )
})
  return (
    <div>
      <div>
                <h2>Danh sách sinh viên</h2>
                <table  className='container bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ttbID</th>
                            <th>ttbName</th>
                            <th>ttbAge</th>
                            <th>ttbClass</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ttbElement}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

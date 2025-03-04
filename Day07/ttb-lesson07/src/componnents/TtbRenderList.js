import React from 'react'

export default function TtbRenderList() {
    const ttbNames = ["Hùng","Dũng","Sang","Trọng"];

    // Hiển thị giá trị của mảng
    const ttbElementName = ttbNames.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div>
      <h2>Danh sách các anh hùng thời đại</h2>
      {ttbElementName}
    </div>
  )
}
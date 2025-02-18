import React from 'react'
 function TtbFuncCompo(props) {
  return (
    <div>
      <h2>Demo: Function Component Props</h2>
      <p>Lấy dữ liệu từ prop để hiển thị </p>
      <p>Name: {props.name}</p>
      <p>Address: {props.address}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}
export default TtbFuncCompo;

import React from 'react'

export default function TtbFuncComp1(props) {
  return (
    <div>
      <h2> Prop is Object</h2>
      <p><b>Infor:</b></p>
      <p>FullName: {props.renderInfo.fullName}</p>
      <p>Age: {props.renderInfo.Age}</p>
      <p>Address: {props.renderInfo.Address}</p>
      <p>Phone: {props.renderInfo.Phone}</p>
    </div>
  )
}

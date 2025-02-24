import React from 'react'

export default function TtbFuncCompEventProps(props) {
    //Ham su li su kien
    const ttbHandelButtonClick1 = ()=>{
        alert("Du lieu tu props:" +props.ttbRenderName);
        console.log("Welcome:",props.ttbRenderName);
    }
    const ttbHandelButtonClick2 = (param)=>{
        // lay du lieu tu prop
        alert("Du lieu tu props (Binh Gold):" +props.ttbRenderName)
        // du lieu tu bien tham so
        console.log("Hi:", param);
    }
  return (
    <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1'onClick={ttbHandelButtonClick1}>Button 1</button>
        <button className='btn btn-success mx-1' onClick={()=>ttbHandelButtonClick2("Binh Gold")}>Button 2</button>
    </div>
  )
}


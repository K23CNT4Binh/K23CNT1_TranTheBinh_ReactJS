import React from 'react'

export default function TtbFuncCompEvent1() {

    //Ham su li su kien
    const ttbEventButton1Click = ()=>{
        alert("Button 1 -Clicked");
    };

    const ttbEventButton2Click =()=>{
        alert("Button 2 - Clicked");
    };

    const ttbEventButton3Click =(name)=>{
        alert("Name:" +name);
    }
  return (
    <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1' onClick={ttbEventButton1Click()}>Button 1</button>
        <button className='btn btn-success mx-1' onClick={ttbEventButton2Click}>Button 2</button>
        <button className='btn btn-success mx-1' onClick={()=>ttbEventButton3Click("Binh Gold")}>Button 3</button>
    </div>
  );
}

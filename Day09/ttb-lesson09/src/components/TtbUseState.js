import React, { useState } from 'react'

export default function TtbUseState() {
    //Tao State la count va ham cap nhap statet la setcount
    const [count,setCount] = useState(0);
    //Ham xu li su kieen tang gia tri cua count
    const ttbHandleTang=()=>{
        
        setCount(count+1);
    }
    //Ham xu li su kien giam gia tri cua count
    const ttbHandleGiam=()=>{
        setCount(count-1);
    }
    
    // state la mang list
    const danh_sach = [100,120,150,200]
    //Khoi tao state
    const [list, setLists] = useState(danh_sach);
    const ttbHandelAddNewRanDom=()=>{
        //setLists(prev =>{
          //  return [
           //     ...prev,
           //     parseInt(Math.random()*1000)
         //   ]
        // })
        setLists([
            ...list,
            parseInt(Math.random()*10000)
        ])

        
    }
  return (
    <div className='alert alert-info'>
       <div>
            <h2>Su dung useState</h2>
            <b>Count: {count} </b>
            <button className=' btn btn-primary mx-1' onClick={ttbHandleTang}>Tăng</button>
            <button className='btn btn-danger mx-1' onClick={ttbHandleGiam}>Giảm</button>
            <button className='btn btn-success mx-1' onClick={()=>setCount(0)}>Đặt lại </button>
        </div>
        <div>
            <h3>List:{list.toString()}</h3> <button className='btn btn-info' onClick={ttbHandelAddNewRanDom}>Add new (random)</button>
        </div>
    </div>
  )
}

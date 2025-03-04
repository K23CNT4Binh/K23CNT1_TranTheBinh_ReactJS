import React, { Component } from 'react'

export default class TtbEventFrom3 extends Component {
    constructor(props){
        super(props);
        this.state ={
            ttbGioiTinh:'Nam',
        }
    }
    //ham xu li su kien change
    ttbHandleChange = (event)=>{
        this.setState({
            ttbGioiTinh:event.target.value,
        })
    }
    //ham xu li su kien submit from
    ttbHandleSubmit = (event)=>{
        event.preventDefault();
        alert('Gioi tinh cua ban la:' + this.state.ttbGioiTinh)
    }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Form input - radio</h2>
       <from>
            <div>
                <label htmlFor=''>Giới tính</label>
                <input type='radio' name='ttbGioitinh' id='ttbNam' className='mx-2'
                    value="Nam" checked={this.state.ttbGioiTinh === 'Nam'} onChange={this.ttbHandleChange}/> 
                    <label htmlFor='ttbNam'>Nam</label>
                <input type='radio' name='ttbGioitinh'  id='ttbNu' className='mx-2'
                    value="Nu" checked={this.state.ttbGioiTinh === 'Nu'} onChange={this.ttbHandleChange}/>  
                    <label htmlFor='ttbNu'>Nữ</label>
                <input type='radio' name='ttbGioitinh'  id='ttbkhac' className='mx-2'
                    value="khac" checked={this.state.ttbGioiTinh === 'khac'} onChange={this.ttbHandleChange}/> 
                    <label htmlFor='ttbkhac'>Khác</label>
            </div>
            <button onClick={this.ttbHandleSubmit}>Submit</button>
       </from>
      </div>
    );
  }
}

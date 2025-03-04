import React, { Component } from 'react'

 class TtbEventFrom1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ttbStudentName:"Binh Gold",
        }
    }
    // ham xu li su kien khi du lieu tren texbox (ttbStudentName) thay doi
    ttbHandleChange = (event)=>{
        //cap nha lai state
        this.setState({
             ttbStudentName:event.target.value,
        })
    }
    //khi submit from, lay du lieu va hien thi 
    ttbHandleSubmit = (ev)=>{
        alert('Xin chao:' + this.state.ttbStudentName);
        ev.preventDefault();
       
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Form Input</h2>
        <from onSubmit={this.ttbHandleSubmit}>
        <label htmlFor='ttbStudentName'>
                <input type='text' name='ttbStudentName' id='ttbStudentName'
                    value={this.state.ttbStudentName}
                    onChange={this.ttbHandleChange}
                />
            </label>
            <button className='btn btn-primary mx-1' onClick={this.ttbHandleSubmit}>Click here</button>
        </from>
      </div>
    );
  }
}
export default TtbEventFrom1;

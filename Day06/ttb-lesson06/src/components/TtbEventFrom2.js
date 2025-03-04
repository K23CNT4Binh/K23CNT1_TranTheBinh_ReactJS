import React, { Component } from 'react'

export default class TtbEventFrom2 extends Component {
    constructor(props){
        super(props)
        this.state={
            ttbCourse: 'CSS3',
        }
    }
    //Ham xu li su kien khi thay doi khoa hoc 
    ttbHandelChange = (event)=>{
        //cap nhap lai state
        this.setState({
            ttbCourse:event.target.value,
        })
    }
    //ham xu li su kienkhi submit from
    ttbHandelSubmit = (event)=>{
        alert("Khoa hoc ban chon:" + this.state.ttbCourse);
        event.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-danger'>
         <h2>Form Select</h2>
       <from>
        <label htmlFor=''>
            <select name='ttbCourse' id='ttbCourse'
            value={this.state.ttbCourse}
            onChange={this.ttbHandelChange}>
                onChange={this.ttbHandelChange}
                <option value={'HTML5'}>HTML5</option>
                <option value={'CSS3'}>CSS3</option>
                <option value={'Javascript'}>Javascript</option>
                <option value={'Jquery'}>Jquery</option>
                <option value={'Bootstrap'}>Bootstrap</option>
            </select>

        </label>
        <button className='btn btn-primary' onClick={this.ttbHandelSubmit}>Click here</button>
       </from>
      </div>
    );
  }
}

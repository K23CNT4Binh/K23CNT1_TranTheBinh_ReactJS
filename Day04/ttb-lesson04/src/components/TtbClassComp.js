import React, { Component } from 'react'

export default class TtbClassComp extends Component {
    constructor(props){
        super(props);
        //khoi tao state
        this.state={
            FullName:"Binh Gold",
            Age:"20",
            Phone:"09783818287",
            Address:"Bac Giang"
        }
    }
    //Ham xu li su kien
     changeinfo = (ev)=>{
        //cap nhat state
        this.setState({
            FullName:"Trần Thế Bình"
        });  
     }
  render() {
    return (
      <div className='alert alert-success'>
        <h2>Trình bày dữ liệu ở state</h2>
        <p>info state (fullName): {this.state.FullName}</p>
        <p>info state (Phone): {this.state.Phone}</p>
        <p>info state (age): {this.state.Age}</p>
        <p>info state (address): {this.state.Address}</p>

        <hr/>
        <button className='btn btn-primary' onClick={this.changeinfo}>Change Info</button>
        <hr/>
        <h3>Lấy dữ liệu từ props</h3>
        <p>Name:{this.props.renderName}</p>
      </div>
    )
  }
}

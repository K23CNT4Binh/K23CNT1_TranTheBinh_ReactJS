import React, { Component } from 'react';
import TtbLoginControl from './TtbLoginControl';

class TtbRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    ttbHandleLogin = (ev)=>{
        ev.preventDefault();
        this.setState({
            isLoggedIn:true
        })
    }
    // Hàm xử lý sự kiện logout
    ttbHandleLogout = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:false
        })
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <TtbLoginControl isLoggedIn={this.state.isLoggedIn} />

                {
                    this.state.isLoggedIn ?
                        <button className='btn btn-danger' onClick={this.ttbHandleLogout} >Logout</button>
                        : <button className='btn btn-primary' onClick={this.ttbHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default TtbRenderCondition;
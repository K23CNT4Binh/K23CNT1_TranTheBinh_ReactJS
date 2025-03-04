import React, { Component } from 'react';

class TtbEventFrom5 extends Component {
    constructor(props){
        super(props);
        this.state = {
          ttbName:'Binh',
          ttbAge:20,
          ttbGender:'Female',
          ttbCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    ttbHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    ttbHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.ttbName + "\n" + this.state.ttbAge);

        // Chuyển dữ liệu trên form lên App component (TtbApp);
        this.props.onTvcHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='ttbName'>Student Name:</label>
                        <input type='text' name='ttbName' id='ttbName'
                            value={this.state.ttbName}
                            onChange={this.ttbHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='ttbAge'>Student Age:</label>
                        <input type='text' name='ttbAge' id='ttbAge'
                            value={this.state.ttbAge}
                            onChange={this.ttbHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='ttbGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='ttbGender' id='ttbGender' className='mx-2'
                                value={'Male'}
                                checked={this.state.ttbGender === 'Male'}
                                onChange={this.ttbHandleChange} />
                            <label htmlFor='ttbMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='ttbGender' id='ttbFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.ttbGender === 'Female'}
                                onChange={this.ttbHandleChange} />
                            <label htmlFor='ttbFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='ttbGender' id='ttbNone' className='mx-2'
                                value={'None'}
                                checked={this.state.ttbGender === 'None'}
                                onChange={this.ttbHandleChange} />
                            <label htmlFor='ttbNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='ttbCourse'>
                            <select name='ttbCourse' id='ttbCourse'
                                    value={this.state.ttbCourse}
                                    onChange={this.ttbHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.ttbHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default TtbEventFrom5;
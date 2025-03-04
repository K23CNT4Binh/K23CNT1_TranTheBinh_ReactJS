import React, { Component } from 'react';

class TtbRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            ttbStudents:[
                {ttbId:"SV001",ttbName:"Tran The Binh", ttbAge:20, ttbClass:"K23CNT1"},
                {ttbId:"SV002",ttbName:"Nguyễn Quang A", ttbAge:22, ttbClass:"K23CNT1"},
                {ttbId:"SV003",ttbName:"Nguyễn Quang B", ttbAge:21, ttbClass:"K23CNT1"},
                {ttbId:"SV004",ttbName:"Nguyễn Quang C", ttbAge:23, ttbClass:"K23CNT1"},
            ],
        }
    }
   
    render() {
        // render data
        const ttbElement = this.state.ttbStudents.map((ttbItem, index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{ttbItem.ttbId}</td>
                    <td>{ttbItem.ttbName}</td>
                    <td>{ttbItem.ttbAge}</td>
                    <td>{ttbItem.ttbClass}</td>
                    <td>
                        <button className='btn btn-danger mx-2'>Sửa</button>
                        <button className='btn btn-primary'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className='card'>
                <div className='card-header'>
                <h2>Danh sách sinh viên</h2>
                </div>
               <div className='card-body'>
               <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ttbID</th>
                            <th>ttbName</th>
                            <th>ttbAge</th>
                            <th>ttbClass</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ttbElement}
                    </tbody>
                </table>
               </div>
                
            </div>
        );
    }
}

export default TtbRenderListStudent;
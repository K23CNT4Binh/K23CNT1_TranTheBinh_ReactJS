import React, { Component } from "react";
import TtbControl from "./components/TtbControl";
import TtbStudentList from "./components/TtbStudentList";
import TtbForm from "./components/TtbForm";

class TtbApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      ttbStudents:[
        {ttbId:"SV001",ttbStudentName:"Tran The Binh",ttbAge:20,ttbGender:"Nam",ttbBirthday:"25/05/2005",ttbBirthPlace:"HN", ttbAddress:"Tòa VCN, 25 Vũ Ngọc Phan"},
        {ttbId:"SV002",ttbStudentName:"Chu Nguyên Chương",ttbAge:188,ttbGender:"Nữ",ttbBirthday:"25/05/1179",ttbBirthPlace:"HP", ttbAddress:"Trung quốc"},
        {ttbId:"SV003",ttbStudentName:"Tần Thủy Hoàng",ttbAge:55,ttbGender:"Nam",ttbBirthday:"25/05/1079",ttbBirthPlace:"TpHCM", ttbAddress:"Trung Quốc"},
        {ttbId:"SV004",ttbStudentName:"Hoàng Thùy Linh",ttbAge:55,ttbGender:"Nam",ttbBirthday:"25/05/1079",ttbBirthPlace:"TpHCM", ttbAddress:"Hồ chí minh"},
      ],
      ttbStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  ttbHandleView = (ttbStudent)=>{
    this.setState({
      ttbStudent:ttbStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.ttbStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Tran The Binh - K23CNT1 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <TtbControl  />
                {/* danh sách sinh vien  */}
                <TtbStudentList  renderTtbStudents={this.state.ttbStudents} onTtbHandleView={this.ttbHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <TtbForm  renderTtbStudent = {this.state.ttbStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TtbApp;
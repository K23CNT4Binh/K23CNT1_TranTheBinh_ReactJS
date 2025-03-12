import React, { Component } from "react";
import TtbStudent from "./TtbStudent";

class TtbStudentList extends Component {
    
        // Hàm xử lý sự kiện xêm
    ttbHandleView = (ttbStudent)=>{
        // Chuyển dữ liệu lên TtbApp
        this.props.onTtbHandleView(ttbStudent);
    }


  render() {
    // lấy dữ liệu trong props từ TtbApp chuyển xuống
    let {renderTtbStudents} = this.props;
    console.log("List:",renderTtbStudents);
    
    // chuyển dữ liệu vào TtbStudent để hiển thị
    let ttbElementStudent = renderTtbStudents.map((ttbItem,index)=>{
        return <TtbStudent key={index} renderTtbStudent={ttbItem} onTtbHandleView={this.ttbHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {ttbElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TtbStudentList;
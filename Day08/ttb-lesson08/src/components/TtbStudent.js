import React, { Component } from "react";

class TtbStudent extends Component {
    

    // Hàm xử lý chức năng xem
    ttbHandleView = (ttbStudent)=>{
        // Chuyển lên TtbStudentList
        this.props.onTtbHandleView(ttbStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ TtbStudentList
    let {renderTtbStudent, key} = this.props;
    console.log("Student:",renderTtbStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderTtbStudent.ttbId}</td>
          <td>{renderTtbStudent.ttbStudentName}</td>
          <td>{renderTtbStudent.ttbAge}</td>
          <td>{renderTtbStudent.ttbGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.ttbHandleView(renderTtbStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default TtbStudent;
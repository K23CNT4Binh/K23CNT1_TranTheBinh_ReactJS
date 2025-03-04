import React, { Component } from "react";

export default class TtbEventForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ttbSelectCheckBox: ["Apple"], // Mặc định chọn "Apple"
    };
  }

  // Hàm xử lý khi chọn checkbox
  ttbHandleCheckBoxChange = (event) => {
    const { value, checked } = event.target;
    this.setState((prevState) => {
      const selectedOptions = checked
        ? [...prevState.ttbSelectCheckBox, value] // Nếu được chọn, thêm vào mảng
        : prevState.ttbSelectCheckBox.filter((option) => option !== value); // Nếu bỏ chọn, lọc ra

      console.log("Selected Options:", selectedOptions);
      return { ttbSelectCheckBox: selectedOptions };
    });
  };

  render() {
    return (
      <div className="alert alert-primary">
        <h2>Form input - checkbox</h2>
        <form> {/* ✅ Sửa lỗi từ <from> thành <form> */}
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.ttbSelectCheckBox.includes("Apple")}
              onChange={this.ttbHandleCheckBoxChange} // ✅ Sửa onCChange thành onChange
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.ttbSelectCheckBox.includes("Banana")}
              onChange={this.ttbHandleCheckBoxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.ttbSelectCheckBox.includes("Orange")}
              onChange={this.ttbHandleCheckBoxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
        </form>
        <p>Selected Fruits: {this.state.ttbSelectCheckBox.join(", ") || "None"}</p>
      </div>
    );
  }
}

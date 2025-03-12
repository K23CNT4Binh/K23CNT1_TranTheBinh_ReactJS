import React, { useState } from "react";

export default function TtbAccountList() {
  const initialTtbAccounts = [
    { ttbId: "SV001", ttbName: "Trần Thế Bình", ttbEmail: "tranthebinh@gmail.com", ttbAmount: "1000" },
    { ttbId: "SV002", ttbName: "Nguyễn Quang A", ttbEmail: "nguyenvana@gmail.com", ttbAmount: "2000" },
    { ttbId: "SV003", ttbName: "Nguyễn Quang B", ttbEmail: "nguyenvanb@gmail.com", ttbAmount: "3000" },
    { ttbId: "SV004", ttbName: "Nguyễn Quang C", ttbEmail: "nguyenvanc@gmail.com", ttbAmount: "4000" },
  ];

  const [ttbStudents, setTtbStudents] = useState(initialTtbAccounts);
  const [newAccount, setNewAccount] = useState({
    ttbId: "",
    ttbName: "",
    ttbEmail: "",
    ttbAmount: "",
  });
  const [editingId, setEditingId] = useState(null); // ID của tài khoản đang chỉnh sửa

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAccount({ ...newAccount, [name]: value });
  };

  // Hàm thêm hoặc cập nhật tài khoản
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newAccount.ttbId || !newAccount.ttbName || !newAccount.ttbEmail || !newAccount.ttbAmount) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (editingId) {
      // Cập nhật tài khoản
      setTtbStudents(ttbStudents.map(student => student.ttbId === editingId ? newAccount : student));
      setEditingId(null);
    } else {
      // Thêm tài khoản mới
      setTtbStudents([...ttbStudents, newAccount]);
    }

    setNewAccount({ ttbId: "", ttbName: "", ttbEmail: "", ttbAmount: "" });
  };

  // Hàm xử lý xóa tài khoản
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tài khoản này?")) {
      setTtbStudents(ttbStudents.filter(student => student.ttbId !== id));
    }
  };

  // Hàm xử lý chỉnh sửa tài khoản
  const handleEdit = (account) => {
    setNewAccount(account);
    setEditingId(account.ttbId);
  };

  return (
    <div className="container">
      <h2>Danh sách sinh viên</h2>

      

      {/* Bảng danh sách tài khoản */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Số tiền</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {ttbStudents.map((ttbItem, index) => (
            <tr key={ttbItem.ttbId}>
              <td>{index + 1}</td>
              <td>{ttbItem.ttbId}</td>
              <td>{ttbItem.ttbName}</td>
              <td>{ttbItem.ttbEmail}</td>
              <td>{ttbItem.ttbAmount}</td>
              <td>
                <button className="btn btn-info mx-1" onClick={() => handleEdit(ttbItem)}>Sửa</button>
                <button className="btn btn-danger" onClick={() => handleDelete(ttbItem.ttbId)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

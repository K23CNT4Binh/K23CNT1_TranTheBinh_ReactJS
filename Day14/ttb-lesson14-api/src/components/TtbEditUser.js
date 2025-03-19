import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TtbEditUser() {
    // Khởi tạo state
    const [ttbListUser, setTtbListUser] = useState([]);
    const [editingUser, setEditingUser] = useState(null); // Lưu user đang chỉnh sửa
    const [formData, setFormData] = useState({ ttbfullName: "", ttbPhone: "", ttbEmail: "", ttbActive: true });

    // API
    const ttbApiOnline = "https://67d97bed00348dd3e2ab49bc.mockapi.io/K23CNT1_TranTheBinh/ttb_users";

    // Load dữ liệu từ API
    useEffect(() => {
        ttbFetchUsers();
    }, []);

    const ttbFetchUsers = () => {
        axios
            .get(ttbApiOnline)
            .then((response) => setTtbListUser(response.data))
            .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
    };

    // Xóa user
    const ttbDeleteUser = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa user này không?")) {
            axios
                .delete(`${ttbApiOnline}/${id}`)
                .then(() => {
                    alert("Xóa thành công!");
                    ttbFetchUsers(); // Load lại danh sách
                })
                .catch((error) => console.error("Lỗi khi xóa user:", error));
        }
    };

    // Mở form sửa user
    const ttbEditUser = (user) => {
        setEditingUser(user.id); // Lưu ID user đang sửa
        setFormData({ ...user }); // Đưa dữ liệu user vào form
    };

    // Cập nhật giá trị trong form
    const ttbHandleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Xử lý cập nhật user
    const ttbUpdateUser = (e) => {
        e.preventDefault();
        axios
            .put(`${ttbApiOnline}/${editingUser}`, formData)
            .then(() => {
                alert("Cập nhật thành công!");
                setEditingUser(null); // Thoát chế độ sửa
                ttbFetchUsers(); // Load lại danh sách
            })
            .catch((error) => console.error("Lỗi khi cập nhật user:", error));
    };

    return (
        <div className="alert alert-danger">
            <h2>Danh sách User</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ttbListUser.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.ttbfullName}</td>
                            <td>{user.ttbPhone}</td>
                            <td>{user.ttbEmail}</td>
                            <td>{user.ttbActive ? "Hoạt động" : "Khóa"}</td>
                            <td>
                                <button className="btn btn-primary mx-1" onClick={() => ttbEditUser(user)}>Edit</button>
                                <button className="btn btn-danger mx-1" onClick={() => ttbDeleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Form sửa user */}
            {editingUser && (
                <div className="alert alert-warning">
                    <h2>Cập nhật User</h2>
                    <form onSubmit={ttbUpdateUser}>
                        <div className="mb-1">
                            <label>Full Name</label>
                            <input type="text" name="ttbfullName" value={formData.ttbfullName} onChange={ttbHandleChange} required />
                        </div>
                        <div className="mb-1">
                            <label>Phone</label>
                            <input type="text" name="ttbPhone" value={formData.ttbPhone} onChange={ttbHandleChange} required />
                        </div>
                        <div className="mb-1">
                            <label>Email</label>
                            <input type="email" name="ttbEmail" value={formData.ttbEmail} onChange={ttbHandleChange} required />
                        </div>
                        <div className="mb-1">
                            <label>Active</label>
                            <select name="ttbActive" value={formData.ttbActive} onChange={ttbHandleChange}>
                                <option value="true">Hoạt động</option>
                                <option value="false">Khóa</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success mx-1">Update</button>
                        <button type="button" className="btn btn-secondary mx-1" onClick={() => setEditingUser(null)}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
}

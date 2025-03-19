import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TtbListUser() {
    // Khởi tạo state
    const [ttbListUser, setTtbListUser] = useState([])

    // API
    const ttbApiOnline = "https://67d97bed00348dd3e2ab49bc.mockapi.io/K23CNT1_TranTheBinh/ttb_users"

    // Đọc dữ liệu từ API bằng axios
    useEffect(() => {
        ttbFetchUsers();
    }, [])

    const ttbFetchUsers = () => {
        axios
            .get(ttbApiOnline)
            .then((ttb_response) => {
                setTtbListUser(ttb_response.data)
            })
            .catch((error) => {
                console.log("Lỗi phát sinh khi tải dữ liệu", error)
            })
    }

    // Hàm xử lý xóa user
    const ttbDeleteUser = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa user này không?")) {
            axios
                .delete(`${ttbApiOnline}/${id}`)
                .then(() => {
                    alert("Xóa thành công!");
                    ttbFetchUsers(); // Load lại danh sách sau khi xóa
                })
                .catch((error) => {
                    console.log("Lỗi khi xóa user", error)
                })
        }
    }

    // View data
    const ttbElementUser = ttbListUser.map((ttb_item, index) => {
        return (
            <tr key={ttb_item.id}>
                <td>{ttb_item.id}</td>
                <td>{ttb_item.ttbfullName}</td>
                <td>{ttb_item.ttbPhone}</td>
                <td>{ttb_item.ttbEmail}</td>
                <td>{ttb_item.ttbActive ? 'Hoạt động' : 'Khóa'}</td>
                <td>
                    <button className='btn btn-primary mx-1'>Edit</button>
                    <button className='btn btn-danger mx-1' onClick={() => ttbDeleteUser(ttb_item.id)}>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <div className='alert alert-danger'>
            <h2>Danh sách User</h2>
            <table className='table table-bordered'>
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
                    {ttbElementUser}
                </tbody>
            </table>
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function TtbListUser() {
    // State lưu danh sách user
    const [ttbListUser, setTtbListUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // API endpoint
    const ttbApi = "https://67e0ab247635238f9aae06d0.mockapi.io/ttb-k23cnt1-tranthebinh-2310900012/ttb_users";

    // Gọi API lấy danh sách user
    useEffect(() => {
        axios.get(ttbApi)
            .then(ttb_response => {
                setTtbListUser(ttb_response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Có lỗi xảy ra:', error);
                setError("Lỗi khi tải dữ liệu!");
                setLoading(false);
            });
    }, []);

    // Hàm xóa user
    const ttbHandleDelete = async (ttbId) => {
        if (window.confirm('Bạn có muốn xóa không?')) {
            try {
                await axios.delete(`${ttbApi}/${ttbId}`);
                setTtbListUser(ttbListUser.filter(user => user.id !== ttbId));
                alert("Xóa thành công!");
            } catch (error) {
                alert("Lỗi khi xóa user!");
            }
        }
    };

    // UI Loading & Error
    if (loading) return <p>Đang tải dữ liệu...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h2>Danh sách User</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ttbListUser.map((ttbUserItem) => (
                        <tr key={ttbUserItem.id}>
                            <td>{ttbUserItem.id}</td>
                            <td>{ttbUserItem.ttb_name}</td>
                            <td>{ttbUserItem.ttb_phone}</td>
                            <td>{ttbUserItem.ttb_email}</td>
                            <td>
                                {ttbUserItem.ttb_active ? 
                                    <span className='badge text-bg-success'>Hoạt Động</span> : 
                                    <span className='badge text-bg-danger'>Tạm khóa</span>
                                }
                            </td>
                            <td>
                                <Link to={`/ttb-edit-user/${ttbUserItem.id}`} className="btn btn-primary mx-1">Edit</Link>
                                <button className="btn btn-danger" onClick={() => ttbHandleDelete(ttbUserItem.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

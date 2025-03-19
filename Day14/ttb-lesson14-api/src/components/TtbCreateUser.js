import React, { useState } from 'react';
import axios from 'axios';

export default function TtbCreateMockAPI() {
  // Khởi tạo state
  const [ttbFullName, setTtbFullName] = useState('');
  const [ttbPhone, setTtbPhone] = useState('');
  const [ttbEmail, setTtbEmail] = useState('');
  const [ttbActive, setTtbActive] = useState(true);

  // API endpoint
  const ttbCreateUserApi = "https://67d97bed00348dd3e2ab49bc.mockapi.io/K23CNT1_TranTheBinh/ttb_users";

  // Khi submit form
  const ttbHandleSubmit = (event) => {
    event.preventDefault();
    console.log("ttbActive:", ttbActive);

    let ttbNewUser = { ttbFullName, ttbPhone, ttbEmail, ttbActive };
    console.log(ttbNewUser);

    // Gửi dữ liệu lên API
    axios
      .post(ttbCreateUserApi, ttbNewUser)
      .then((ttb_response) => {
        console.log("User created:", ttb_response.data);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div className="alert alert-info">
      <h2>Thêm mới Users</h2>
      <hr />
      <form onSubmit={ttbHandleSubmit}>
        <div className="mb-1">
          <label htmlFor="ttbfullName">Full Name</label>
          <input
            type="text"
            name="ttbfullName"
            id="ttbfullName"
            value={ttbFullName}
            onChange={(ev) => setTtbFullName(ev.target.value)}
          />
        </div>

        <div className="mb-1">
          <label htmlFor="ttbPhone">Phone</label>
          <input
            type="number"
            name="ttbPhone"
            id="ttbPhone"
            value={ttbPhone}
            onChange={(ev) => setTtbPhone(Number(ev.target.value))}
          />
        </div>

        <div className="mb-1">
          <label htmlFor="ttbEmail">Email</label>
          <input
            type="number"
            name="ttbEmail"
            id="ttbEmail"
            value={ttbEmail}
            onChange={(ev) => setTtbEmail(Number(ev.target.value))}
          />
        </div>

        <div className="mb-1">
          <label>Active</label>
          <div>
            <input
              type="radio"
              name="ttbActive"
              id="ttbActive_hd"
              value="true"
              checked={ttbActive === true}
              onChange={() => setTtbActive(true)}
            />
            <label htmlFor="ttbActive_hd"> Hoạt động</label>
          </div>

          <div>
            <input
              type="radio"
              name="ttbActive"
              id="ttbActive_kh"
              value="false"
              checked={ttbActive === false}
              onChange={() => setTtbActive(false)}
            />
            <label htmlFor="ttbActive_kh"> Khóa</label>
          </div>
        </div>

        <button type="submit" className='btn btn-success'>Create</button>
      </form>
    </div>
  );
}

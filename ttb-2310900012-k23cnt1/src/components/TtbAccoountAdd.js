import React from "react";

export default function TtbAccoountAdd({ newAccount = {}, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="d-flex gap-2">
        <input
          type="text"
          name="ttbId"
          placeholder="ID"
          className="form-control"
          value={newAccount.ttbId || ""} // Đảm bảo giá trị không bị undefined
          onChange={handleChange}
        />
        <input
          type="text"
          name="ttbName"
          placeholder="Tên"
          className="form-control"
          value={newAccount.ttbName || ""}
          onChange={handleChange}
        />
        <input
          type="email"
          name="ttbEmail"
          placeholder="Email"
          className="form-control"
          value={newAccount.ttbEmail || ""}
          onChange={handleChange}
        />
        <input
          type="number"
          name="ttbAmount"
          placeholder="Số tiền"
          className="form-control"
          value={newAccount.ttbAmount || ""}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success">Thêm</button>
      </div>
    </form>
  );
}

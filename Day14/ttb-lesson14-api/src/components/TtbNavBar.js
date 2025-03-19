import React from "react";
import { Link } from "react-router-dom";

export default function TtbNavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    TTB App
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Trang chủ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/list">
                                Danh sách Users
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">
                                Thêm mới User
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

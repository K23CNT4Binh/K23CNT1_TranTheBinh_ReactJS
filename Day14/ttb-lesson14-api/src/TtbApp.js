import React from 'react';
import TtbListUser from './components/TtbListUser';
import TtbCreateUser from './components/TtbCreateUser';

export default function TtbApp() {
  return (
    <div className="container border my-3 p-3">
      <h1 className="alert alert-primary text-center">K23CNT1 - Trần Thế Bình - Bài thực hành tổng hợp</h1>
      <TtbListUser/>
      <hr/>
      <TtbCreateUser/>
    </div>
  );
}

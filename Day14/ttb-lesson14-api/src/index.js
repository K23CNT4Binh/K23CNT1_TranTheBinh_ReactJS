import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // ✅ Thêm BrowserRouter
import TtbApp from './TtbApp';

const ttbRoot = ReactDOM.createRoot(document.getElementById('ttbRoot'));
ttbRoot.render(
  <BrowserRouter>  {/* ✅ Bọc toàn bộ ứng dụng trong BrowserRouter */}
    <TtbApp />
  </BrowserRouter>
);

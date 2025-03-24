import React from 'react';
import ReactDOM from 'react-dom/client';
import'./index.css';
import reportWebVitabls from './reportWebVitabls';
import TtbApp from './TtbApp';

const ttbRoot = ReactDOM.createRoot(document.getElementById('ttbRoot'));
ttbRoot.render(
    <React.StrictMode>
      <TtbApp/>
    </React.StrictMode>
);

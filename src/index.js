
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';


// ReactDOM.render(
//   <React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
    <BrowserRouter>
  <React.StrictMode>
      <App />
  </React.StrictMode>,
    </BrowserRouter>
);

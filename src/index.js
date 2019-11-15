import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Title from './Components/title';
import Table from './Components/entry';


ReactDOM.render(<Title />,document.getElementById('title'));
ReactDOM.render(<Table />,document.getElementById('root'));

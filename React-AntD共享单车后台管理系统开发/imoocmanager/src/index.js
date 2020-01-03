/*
 * @Author: wuchen
 * @Date: 2020-01-02 16:14:00
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-03 16:06:40
 * @Description: 
 * @Email: rangowu@163.com
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Life from './pages/demo/Life';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Life />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

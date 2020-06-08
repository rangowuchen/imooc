/*
 * @Author: wuchen
 * @Date: 2020-06-02 17:28:32
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-03 11:42:59
 * @Description: 
 * @Email: rangowu@163.com
 */ 
import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
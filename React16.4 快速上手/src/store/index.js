/*
 * @Author: wuchen
 * @Date: 2020-06-02 17:28:32
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-02 18:43:19
 * @Description: 
 * @Email: rangowu@163.com
 */ 
import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;
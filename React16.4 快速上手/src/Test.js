/*
 * @Author: wuchen
 * @Date: 2020-05-19 15:08:15
 * @LastEditors: wuchen
 * @LastEditTime: 2020-05-19 15:19:28
 * @Description: 
 * @Email: rangowu@163.com
 */ 
import React, { Component } from 'react';

class Test extends Component {
    //  当父组件的render函数被运行时,它的子组件的render都将被重新运行一次
    render() {
        console.log('Test render')
        return <div>{this.props.content}</div>
    }
}

export default Test;
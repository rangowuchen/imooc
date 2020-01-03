/*
 * @Author: wuchen
 * @Date: 2020-01-02 16:42:39
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-03 16:14:38
 * @Description: 
 * @Email: rangowu@163.com
 */
import React from 'react';
import Child from './Child'

export default class Life extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            date: new Date() 
        };
    }
    handleAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleClick(){
        this.setState({
            count: this.state.count - 1
        })
    }
    render(){
        return <div style={{padding:0}}>
            <p>react生命周期介绍</p>
            <button onClick={this.handleAdd.bind(this)}>点击一下</button>
            <button onClick={this.handleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
    }
}
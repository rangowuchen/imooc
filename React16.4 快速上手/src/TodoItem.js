/*
 * @Author: wuchen
 * @Date: 2019-12-13 11:44:09
 * @LastEditors: wuchen
 * @LastEditTime: 2020-04-28 19:43:56
 * @Description: 
 * @Email: rangowu@163.com
 */
import React, { Component } from 'react';

class TodoItem extends Component {

    // 子组件如果想和父组件通信,要调用父组件传递过来的方法

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        this.props.delete(this.props.index)
    }

    render() {
        // es6解构赋值
        const { content } = this.props;//es6
        return (
            // <div onClick={this.handleDelete}>{this.props.content}</div>
            <div onClick={this.handleDelete}>{content}</div>
            // 可以输入html标签并编译
            // <div onClick={this.handleDelete} dangerouslySetInnerHTML={{__html:content}}></div>
        )
    }
}

export default TodoItem;
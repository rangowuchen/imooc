/*
 * @Author: wuchen
 * @Date: 2019-12-13 11:44:09
 * @LastEditors: wuchen
 * @LastEditTime: 2020-05-20 15:55:38
 * @Description: 
 * prop-types:传值的字段类型
 * defaultProps:默认值(若父组件没有给子组件传值,可在子组件写个默认值,防止报错)
 * @Email: rangowu@163.com
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';//定义类型

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
        const { content, test } = this.props;//es6
        // jsx -> createElement -> 虚拟DOM(js对象) -> 真实的DOM
        // return <div><span>item</span></div> 等同下面
        // return React.createElement('div', {}, React.createElement('span), {}, 'item')
        return (
            // <div onClick={this.handleDelete}>{this.props.content}</div>
            <div onClick={this.handleDelete}>{test} - {content}</div>
            // 可以输入html标签并编译
            // <div onClick={this.handleDelete} dangerouslySetInnerHTML={{__html:content}}></div>
        )
    }
}

// 限制要求父组件给子组件传值的类型
TodoItem.propTypes = {
    // content: PropTypes.string,//字符串,若是函数则为PropTypes.func
    test: PropTypes.string.isRequired,//此字段必须从父组件传值,且为必传,若父组件未传,可定义个默认值
    // 若可以是好几种类型,可用oneOfType
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

// 定义默认值
TodoItem.defaultProps = {
    test:'hellow world'
}
export default TodoItem;
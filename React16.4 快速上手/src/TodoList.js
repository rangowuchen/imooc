/*
 * @Author: wuchen
 * @Date: 2019-12-12 15:16:45
 * @LastEditors: wuchen
 * @LastEditTime: 2019-12-13 15:11:16
 * @Description: 
 * @Email: rangowu@163.com
 */
import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

// 定义一个React组件
// 一个类继承Component
class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        'learn react',
        'learn english',
        'learn vue'
      ],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }






  handleBtnClick() {
    this.setState({
      // 包含之前list的数据,同时添加...
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }
  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接收父组件传递过来的参数

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  getTodoLists() {
    return (
      this.state.list.map((item,index) => {
        return (
          <TodoItem
           delete={this.handleDelete} 
           key={index} 
           content={item} 
           index={index}
          />
        )
        // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
      })
    )
  }
  render() {
    // jsx语法
    return (
      // 外层需要包裹一层,但是如果不想在页面渲染的时候多一层.L0
      //可替换成 <React.Fragment></React.Fragment>
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          {/* bind使得this的指向相同 */}
          <button style={{background:'red', color:'#fff'}} className='rea-btn' onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {
            this.getTodoLists()
          }
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;

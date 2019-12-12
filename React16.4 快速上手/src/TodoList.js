/*
 * @Author: wuchen
 * @Date: 2019-12-12 15:16:45
 * @LastEditors: wuchen
 * @LastEditTime: 2019-12-12 16:42:49
 * @Description: 
 * @Email: rangowu@163.com
 */
import React, { Component } from 'react';

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

  handleItemClick(index) {
    console.log(index);
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
  render() {
    // jsx语法
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          {/* bind使得this的指向相同 */}
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => {
              return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;

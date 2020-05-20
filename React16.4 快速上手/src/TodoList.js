/*
 * @Author: wuchen
 * @Date: 2019-12-12 15:16:45
 * @LastEditors: wuchen
 * @LastEditTime: 2020-05-20 16:16:16
 * @Description: 
 * @Email: rangowu@163.com
 */
import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Test from './Test';

// 定义一个React组件
// 一个类继承Component
class TodoList extends Component {

  constructor(props) {
    super(props);
    // 当组件的state或者props发生改变的时候,render函数就会重新执行
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






  // 新增
  handleBtnClick() {
    // 旧写法
    // this.setState({
    //   // es6展开运算符,例this.state.list = [1,2,3]=>...this.state.list=>1,2,3
    //   // 包含之前list的数据,同时添加...
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    // 新写法-prevState修改数据之前的数据,等价于this.state
    this.setState((prevState) => ({
      // list: [...this.state.list, this.state.inputValue],
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }),() => {
      // setState 异步函数执行完成后才执行的函数
      console.log(this.ul.querySelectorAll('div').length)
    })
    // 不能在此处打印,setState是异步函数,不会立即执行
    // console.log(this.ul.querySelectorAll('div').length)
  }
  handleInputChange(e) {
    console.log(e.target.value);
    // 旧写法
    // this.setState({
    //   inputValue: e.target.value
    // })
    // 新写法(未简化)
    // this.setState(() => {
    //   return {
    //     inputValue:e.target.value
    //   }
    // })
    // 新写法(简化es6 return简写)
    // const value = e.target.value;//不能直接写,否则会报错,可写成下面形式,ref获取的值
    const value = this.input.value
    this.setState(() => ({
      inputValue: value
    }))
  }
  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接收父组件传递过来的参数

  // 删除
  handleDelete(index) {
    // 先拷贝后改变的原因:immutable
    // state 不允许我们做任何的改变,所以this.state.list.splice(index,1)是错误的
    
    // 拷贝
    const list = [...this.state.list];
    list.splice(index, 1);
    //旧写法-改变数据
    // this.setState({
    //   list: list
    // })
    // 新写法
    this.setState(() => ({
      list: list
    }))
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
          {/* label中的for属性不能直接写成for,react会读取成for循环.所以用htmlFor */}
          {/* <label for="inputArea">请输入内容</label> */}
          <label htmlFor="inputArea">请输入内容</label>
          <input 
            id="inputArea" 
            className="input" 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
            ref={ (input) => {this.input = input}}
          />
          {/* bind使得this的指向相同 */}
          <button style={{background:'red', color:'#fff'}} className='rea-btn' onClick={this.handleBtnClick}>add</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          { this.getTodoLists() }
        </ul>
        <Test content={this.state.inputValue}/>
      </Fragment>
    );
  }
}

export default TodoList;

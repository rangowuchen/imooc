/*
 * @Author: wuchen
 * @Date: 2020-06-01 17:44:14
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-09 15:04:03
 * @Description: 
 * @Email: rangowu@163.com
 */ 
import React,{Component} from 'react';
import store from './store';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        // 只要store发生改变这个方法就会执行
        // 第四步，更新视图
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return (
            <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleItemDelete={this.handleItemDelete}
            ></TodoListUI>
        )
    }

    handleInputChange(e){
        // 创建action
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        // 传递action
        store.dispatch(action)
        // console.log(e.target.value)
    }

    handleBtnClick() {
        // 第一步 创建action
        // const action = {
        //     type: ADD_TODO_ITEM,
        // }
        const action = getAddItemAction();
        // 第二步 将action发给store
        store.dispatch(action)

    }

    handleStoreChange() {
        // 重新从store中取数据，更新到state
        this.setState(store.getState())
        console.log('store change')
    }
    handleItemDelete(index){
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        const action = getDeleteItemAction(index)
        store.dispatch(action);
    }
    
}

export default TodoList;
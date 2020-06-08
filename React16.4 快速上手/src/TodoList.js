/*
 * @Author: wuchen
 * @Date: 2020-06-01 17:44:14
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-08 20:12:08
 * @Description: 
 * @Email: rangowu@163.com
 */ 
import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        // 只要store发生改变这个方法就会执行
        // 第四步，更新视图
        store.subscribe(this.handleStoreChange);
    }
    render(){
        return (
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
                    <Input
                     placeholder="TODO INFO"
                     value={this.state.inputValue} 
                     style={{width:'300px',marginRight:'10px'}}
                     onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }

    handleInputChange(e){
        // 创建action
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        // 传递action
        store.dispatch(action)
        // console.log(e.target.value)
    }

    handleBtnClick() {
        // 第一步 创建action
        const action = {
            type: 'add_todo_item',
        }
        // 第二步 将action发给store
        store.dispatch(action)

    }

    handleStoreChange() {
        // 重新从store中取数据，更新到state
        this.setState(store.getState())
        console.log('store change')
    }
    
}

export default TodoList;
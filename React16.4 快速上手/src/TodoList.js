/*
 * @Author: wuchen
 * @Date: 2020-06-01 17:44:14
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-02 18:48:37
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
    }
    render(){
        return (
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
                    <Input placeholder="TODO INFO" value={this.state.inputValue} style={{width:'300px',marginRight:'10px'}}/>
                    <Button type="primary">提交</Button>
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
}

export default TodoList;
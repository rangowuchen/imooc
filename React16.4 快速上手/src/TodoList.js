/*
 * @Author: wuchen
 * @Date: 2020-06-01 17:44:14
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-02 16:29:19
 * @Description: 
 * @Email: rangowu@163.com
 */ 
import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
class TodoList extends Component {
    render(){
        return (
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
                    <Input placeholder="TODO INFO" style={{width:'300px',marginRight:'10px'}}/>
                    <Button type="primary">提交</Button>
                </div>
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList;
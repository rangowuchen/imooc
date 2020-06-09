/*
 * @Author: wuchen
 * @Date: 2020-06-09 14:48:45
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-09 15:23:14
 * @Description: UI组件负责页面的渲染,容器组件负责业务逻辑
 * @Email: rangowu@163.com
 */ 
import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
const TodoListUI = (props) => {
    return (
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
            <div>
                <Input
                 placeholder="TODO INFO"
                 value={props.inputValue} 
                 style={{width:'300px',marginRight:'10px'}}
                 onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List
                style={{marginTop:'10px',width:'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{marginTop:'10px',marginLeft:'10px'}}>
//                 <div>
//                     <Input
//                      placeholder="TODO INFO"
//                      value={this.props.inputValue} 
//                      style={{width:'300px',marginRight:'10px'}}
//                      onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//                 </div>
//                 <List
//                     style={{marginTop:'10px',width:'300px'}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item,index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
// }
export default TodoListUI

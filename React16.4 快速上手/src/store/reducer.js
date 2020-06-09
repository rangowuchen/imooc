/*
 * @Author: wuchen
 * @Date: 2020-06-02 18:34:47
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-09 13:01:58
 * @Description: 
 * @Email: rangowu@163.com
 */ 
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionType'
// 仓库中有两个数据
const defaultState = {
    inputValue: '',
    list: []
}
// reducer可以接收state，但是绝不能修改state
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    // 第三步 将newState传递给store
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        // 提交完输入框置空
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    console.log(state, action)
    return state;
}
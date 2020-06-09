/*
 * @Author: wuchen
 * @Date: 2020-06-02 18:34:47
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-09 12:49:27
 * @Description: 
 * @Email: rangowu@163.com
 */ 
// 仓库中有两个数据
const defaultState = {
    inputValue: '',
    list: []
}
// reducer可以接收state，但是绝不能修改state
export default (state = defaultState, action) => {
    if(action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    // 第三步 将newState传递给store
    if(action.type === 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        // 提交完输入框置空
        newState.inputValue = '';
        return newState;
    }
    if(action.type === 'delete_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    console.log(state, action)
    return state;
}
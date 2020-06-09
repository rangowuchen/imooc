/*
 * @Author: wuchen
 * @Date: 2020-06-09 12:53:48
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-09 18:46:48
 * @Description: ActionTypes的拆分的意义,将字符串提取出来定义成变量或者常量,写错很容易差找到问题,页面会报错
 * 要是写字符串,页面不报错,很难排查到问题所在
 * @Email: rangowu@163.com
 */ 
export const CHANGE_INPUT_VALUE = 'change_input_value'
export const ADD_TODO_ITEM = 'add_todo_item'
export const DELETE_TODO_ITEM = 'delete_todo_item'
export const INIT_LIST_ACTION = 'init_list_action'

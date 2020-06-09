/*
 * @Author: wuchen
 * @Date: 2020-06-09 13:38:24
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-09 13:50:37
 * @Description: 
 * @Email: rangowu@163.com
 */ 
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionType'
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

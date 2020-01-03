/*
 * @Author: wuchen
 * @Date: 2020-01-02 16:42:39
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-03 16:16:41
 * @Description: 
 * @Email: rangowu@163.com
 */
import React from 'react'

export default class Child extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
    }
    componentWillMount() {
        console.log('willmount')
    }
    componentDidMount() {
        console.log('didmount')
    }
    componentWillReceiveProps(newProps) {
        console.log('will receove props' + newProps.name)
    }

    shouldComponentUpdate(){
        console.log('should update');
        return true;
    }

    componentWillUpdate() {
        console.log('will update')
    }
    componentDidUpdate() {
        console.log('did update')
    }
    render(){
        return <div>
            <p>这是子组件</p>
            <p>{this.props.name}</p>
        </div>
    }
}
/*
 * @Author: wuchen
 * @Date: 2020-05-27 12:35:40
 * @LastEditors: wuchen
 * @LastEditTime: 2020-05-27 19:09:12
 * @Description: 
 * @Email: rangowu@163.com
 */ 
import React, {Component, Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:true
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    render() {
        return (
            // 入场动画结束之后执行onEntered
            // unmountOnExit 移除元素
            // appear 第一次展示在页面的时候,也要动画效果
            <Fragment>
                <CSSTransition 
                in={this.state.show}
                timeout={1000}
                classNames='fade'
                unmountOnExit
                onEntered={(el) =>{el.style.color='blue'}}
                appear={true}
                >
                    <div>hello</div>
                </CSSTransition>
                <button onClick={this.handleToggle}>toggle</button>
            </Fragment> 
        )
    }

    handleToggle(){
        this.setState({
            show: this.state.show ? false : true
        })
    }
}
export default App
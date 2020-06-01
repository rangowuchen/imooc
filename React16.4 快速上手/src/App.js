/*
 * @Author: wuchen
 * @Date: 2020-05-27 12:35:40
 * @LastEditors: wuchen
 * @LastEditTime: 2020-06-01 17:15:50
 * @Description: 
 * @Email: rangowu@163.com
 */ 
import React, {Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import './style.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[]
        }
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    render() {
        return (
            // 入场动画结束之后执行onEntered
            // unmountOnExit 移除元素
            // appear 第一次展示在页面的时候,也要动画效果
            <Fragment>
                <TransitionGroup>
                {
                    this.state.list.map((item,index) => {
                        return (
                            <CSSTransition
                                timeout={1000}
                                classNames='fade'
                                unmountOnExit
                                onEntered={(el) =>{el.style.color='blue'}}
                                appear={true}
                                key={index}
                                >
                                <div>{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
                <div>hello</div>
                <button onClick={this.handleAddItem}>toggle</button>
            </Fragment> 
        )
    }

    handleAddItem(){
        this.setState((prevState) => {
            return {
                list:[...prevState.list, 'item']
            }
        })
    }
}
export default App
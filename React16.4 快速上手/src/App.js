/*
 * @Author: wuchen
 * @Date: 2020-05-27 12:35:40
 * @LastEditors: wuchen
 * @LastEditTime: 2020-05-27 12:47:27
 * @Description: 
 * @Email: rangowu@163.com
 */ 
import React, {Component, Fragment} from 'react';
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
            <Fragment>
                <div className={this.state.show ? 'show' : 'hide'}>hello</div>
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
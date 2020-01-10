/*
 * @Author: wuchen
 * @Date: 2020-01-08 19:31:25
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-10 10:49:11
 * @Description: 
 * @Email: rangowu@163.com
 */
import React from 'react';
import MenuConfig from './../../config/menuConfig'
import { Menu } from 'antd';
import './index.less';
const { SubMenu } = Menu;


export default class NavLeft extends React.Component {
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
    }
    render() {
        return (
            <div style={{background:'red'}}>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}
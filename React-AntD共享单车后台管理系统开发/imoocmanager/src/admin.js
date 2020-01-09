/*
 * @Author: wuchen
 * @Date: 2020-01-08 19:29:41
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-09 20:05:33
 * @Description: 
 * @Email: rangowu@163.com
 */
import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less';
export default class Admin extends React.Component{

    render() {
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft></NavLeft>
                </Col>
                <Col span={20} className="main">
                    <Header>header</Header>
                    <Row className="content">
                        content
                    </Row>
                    <Footer>footer</Footer>
                </Col>
            </Row>
        );
    }
}
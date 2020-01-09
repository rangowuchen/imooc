/*
 * @Author: wuchen
 * @Date: 2020-01-08 19:29:41
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-08 21:11:57
 * @Description: 
 * @Email: rangowu@163.com
 */
import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft'
export default class Admin extends React.Component{

    render() {
        return (
            <Row>
                <Col span={3}>
                    <NavLeft></NavLeft>
                </Col>
                <Col span={21}>
                    <Header>header</Header>
                    <Row>
                        内容
                    </Row>
                    <Footer>footer</Footer>
                </Col>
            </Row>
        );
    }
}
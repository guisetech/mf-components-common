import React, {ReactNode} from 'react';
import {Col, Row} from 'antd';
import { Router } from 'react-router-dom';
import * as H from "history";


interface AppLayoutProps {
    Navbar?: ReactNode;
    SideBar?: ReactNode;
    Content?: ReactNode;
    history:H.History
}



const AppLayout: React.FC<AppLayoutProps> = (props:AppLayoutProps) => {
    const {Navbar, SideBar, Content, history} = props
    return (
        <Router history={history} >
            <Row>
                <Col span={24}>{Navbar}</Col>
            </Row>
            <Row>
                <Col span={4}>{SideBar}</Col>
                <Col span={20}>{Content}</Col>
            </Row>
        </Router>
    )
}
export default AppLayout

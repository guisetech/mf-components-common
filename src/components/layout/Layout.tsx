import React, {ReactNode} from 'react';
import {Col, Row} from 'antd';
import Navbar from "../Navbar/Navbar";
import SideBar from '../SideBar/SideBar';

interface AppLayoutProps {
    Content?: ReactNode;
}


const AppLayout: React.FC<AppLayoutProps> = ({ Content}) => {
    return (
        <>
            <Row>
                <Col span={24}><Navbar/></Col>
            </Row>
            <Row>
                <Col span={4}><SideBar/></Col>
                <Col span={20}>{Content}</Col>
            </Row>
        </>
    )
}
export default AppLayout

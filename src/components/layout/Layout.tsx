import React, {ReactNode} from 'react';
import {Col, Row} from 'antd';

interface AppLayoutProps {
    Navbar: ReactNode;
    Sidebar: ReactNode;
    Content?: ReactNode;
}


const AppLayout: React.FC<AppLayoutProps> = ({Navbar, Sidebar, Content}) => {
    return (
        <>
            <Row>
                <Col span={24}>{Navbar}</Col>
            </Row>
            <Row>
                <Col span={4}>{Sidebar}</Col>
                <Col span={20}>{Content}</Col>
            </Row>
        </>
    )
}
export default AppLayout

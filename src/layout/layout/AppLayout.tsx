import React from 'react'
import {Router} from 'react-router-dom'
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import {Layout, LayoutProps, Content} from "./Layout";
import * as H from "history";
import {Col, Row} from "antd";

export interface AppLayoutProps extends LayoutProps {
    content?: React.ReactNode;
    history: H.History;
}

const AppLayout = (props: AppLayoutProps) => {

    const {content, history, ...layoutProps} = {...props};

    return (
        <Router location={""} navigator={history}>
            <Layout>
                <Navbar/>
                <Layout {...layoutProps} >
                    <Row>
                        <Col span={6}>
                            <SideBar/>
                        </Col>
                        <Col span={18} flex={"auto"} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <Content>
                                {props.content}
                            </Content>
                        </Col>
                    </Row>
                </Layout>
            </Layout>
        </Router>
    )
}
export default AppLayout;

import React from 'react'
import {Router} from 'react-router-dom'
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";
import {Layout, LayoutProps, Content} from "./Layout";
import * as H from "history";

export interface AppLayoutProps extends LayoutProps {
    content?: React.ReactNode;
    history: H.History;
}

const AppLayout = (props: AppLayoutProps) => {

    const {content, history, ...layoutProps} = {...props};

    return (
        <Router location={""} navigator={history} >
            <Layout>
                <Navbar/>
                <Layout {...layoutProps} >
                    <SideBar/>
                    <Content>
                        {props.content}
                    </Content>
                </Layout>

            </Layout>
        </Router>
    )
}
export default AppLayout;

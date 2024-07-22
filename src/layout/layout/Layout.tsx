import * as React from 'react';
import { Layout as AntLayout } from 'antd';
import {ComponentBaseProps} from "../../interfaces/ComponentBaseProps";

export interface LayoutProps extends ComponentBaseProps {
    tabIndex?: number;
    theme?: 'light' | 'dark';
    children?: React.ReactNode;
}

export interface HeaderProps extends ComponentBaseProps {
    children?: React.ReactNode;
}

export interface ContentProps extends ComponentBaseProps {
    children?: React.ReactNode;

}

export interface FooterProps extends ComponentBaseProps {
    children?: React.ReactNode;
}

export const Layout =(props:LayoutProps)=>{
    return <AntLayout {...props}></AntLayout>
}

export const Header = (props:HeaderProps)=>{
    return <AntLayout.Header {...props}></AntLayout.Header>
}

export const Content = (props:ContentProps)=>{
    return <AntLayout.Content {...props}></AntLayout.Content>
}

export const Footer = (props:FooterProps)=>{
    return <AntLayout.Footer {...props}></AntLayout.Footer>
}



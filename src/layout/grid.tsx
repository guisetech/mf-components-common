import React from 'react';
import { Row as AntRow, Col as AntCol } from 'antd';
import { ComponentBaseProps } from '../interfaces/ComponentBaseProps';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement>, ComponentBaseProps {
    gutter?: Gutter | [Gutter, Gutter];
    align?: (typeof RowAligns)[number];
    justify?: (typeof RowJustify)[number];
    wrap?: boolean;
    contentEditable:boolean | 'plaintext-only';
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement>, ComponentBaseProps {
    flex?: FlexType;
    span?: ColSpanType;
    order?: ColSpanType;
    offset?: ColSpanType;
    push?: ColSpanType;
    pull?: ColSpanType;
    xs?: ColSpanType | ColSize;
    sm?: ColSpanType | ColSize;
    md?: ColSpanType | ColSize;
    lg?: ColSpanType | ColSize;
    xl?: ColSpanType | ColSize;
    xxl?: ColSpanType | ColSize;
}

export const Row = (props: RowProps) => {
    return <AntRow {...props}></AntRow>;
};

export const Col = (props: ColProps) => {
    return <AntCol {...props}></AntCol>;
};

declare const RowAligns: ['top', 'middle', 'bottom', 'stretch'];
declare const RowJustify: ['start', 'end', 'center', 'space-around', 'space-between'];
declare type ColSpanType = number | string;
declare type FlexType = number | 'none' | 'auto' | string;
declare type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
declare type Gutter = number | Partial<Record<Breakpoint, number>>;
interface ColSize {
    flex?: FlexType;
    span?: ColSpanType;
    order?: ColSpanType;
    offset?: ColSpanType;
    push?: ColSpanType;
    pull?: ColSpanType;
}

export interface NavbarProps {
    activeIndex: Number | null;
    handleClick: (index: Number) => void;
}

export interface SidebarItemProps {
    label: string;
    className: string | "";
    textClassName: string | "";
    activeIndex: boolean;
    handleClick: () => void;
    index: number;
}
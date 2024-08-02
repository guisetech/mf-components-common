import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import navbarContent from "../components/Navbar/navbarContent";
import sideBarContent from "../components/SideBar/sideBarContent";

export interface ActiveIndexContextProps {
    activeNavbarIndex: number;
    visibleNavbar: boolean;
    setVisibleNavbar: (visibleNavbar: boolean) => void;
    setActiveNavbarIndex: (index: number) => void;
    activeSidebarIndex: number;
    setActiveSidebarIndex: (index: number) => void;
    visibleSidebar: boolean;
    setVisibleSidebar: (isVisible: boolean) => void;
}

const ActiveIndexContext = createContext<ActiveIndexContextProps | undefined>(undefined);

const ActiveIndexProvider = ({children}: { children: ReactNode }) => {
    const [activeNavbarIndex, setActiveNavbarIndex] = useState(0);
    const [activeSidebarIndex, setActiveSidebarIndex] = useState(0);
    const [visibleNavbar, setVisibleNavbar] = useState(false);
    const [visibleSidebar, setVisibleSidebar] = useState(false);


    useEffect(() => {
        navbarContent.map((value, index) => {
            if (window.location.pathname === `/${value.name}`) {
                setActiveNavbarIndex(value.index);
                setVisibleNavbar(true);
                setVisibleSidebar(false);
            }
        })
    }, [activeNavbarIndex, setActiveNavbarIndex, visibleNavbar, setVisibleNavbar]);

    useEffect(() => {
        sideBarContent.map((value, index) => {
            if (window.location.pathname === `/${value.name}`) {
                setActiveSidebarIndex(value.index);
                setVisibleSidebar(true);
                setVisibleNavbar(false);
            }
        })
    }, [activeSidebarIndex, setActiveSidebarIndex, visibleSidebar, setVisibleSidebar]);



    return (
        <ActiveIndexContext.Provider value={{
            visibleSidebar,
            setVisibleSidebar,
            visibleNavbar,
            setVisibleNavbar,
            activeNavbarIndex,
            setActiveNavbarIndex,
            activeSidebarIndex,
            setActiveSidebarIndex
        }}>
            {children}
        </ActiveIndexContext.Provider>
    );
};

export  {ActiveIndexProvider, ActiveIndexContext};

// export const useActiveIndex = (): ActiveIndexContextProps => {
//     const context = useContext(ActiveIndexContext);
//     if (!context) {
//         throw new Error('useActiveIndex must be used within an ActiveIndexProvider');
//     }
//     return context;
// };




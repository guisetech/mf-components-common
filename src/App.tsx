import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import {useState} from "react";

function App() {
    const [activeNavbarIndex, setActiveNavbarIndex] = useState<Number | null>(-1)
    const [activeSidebarIndex, setActiveSidebarIndex] = useState<Number | null>(-1)

    const handleNavbarClick = (index: Number) => {
        setActiveNavbarIndex(index)
        setActiveSidebarIndex(null)
    }

    const handleSidebarClick = (index: Number) => {
        setActiveSidebarIndex(index)
        setActiveNavbarIndex(null)
    }

    return (
        <div className="w-full">
            <Navbar activeIndex={activeNavbarIndex} handleClick={handleNavbarClick}/>
            <div className="md:w-1/5">
                <SideBar activeIndex={activeSidebarIndex} handleClick={handleSidebarClick}/>
            </div>
        </div>
    );
}

export default App;

import {ActiveIndexProvider} from "./context/activeIndexContext";
import AppLayout from "./components/layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";


const App = () => {
    return (
        <ActiveIndexProvider>
            <AppLayout Navbar={<Navbar/>} SideBar={<SideBar/>} Content={"Hello World"}/>
        </ActiveIndexProvider>
    );
};

export default App;
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import ActiveIndexProvider from "./context/activeIndexContext";
import AppLayout from "./components/layout/Layout";


const App = () => {
    return (
        <ActiveIndexProvider>
            <AppLayout Navbar={<Navbar/>} Sidebar={<SideBar/>} Content={""}/>
        </ActiveIndexProvider>
    );
};

export default App;
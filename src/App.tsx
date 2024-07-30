import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import ActiveIndexProvider from "./context/activeIndexContext";



const App = () => {
    return (
        <ActiveIndexProvider><Navbar/><SideBar/></ActiveIndexProvider>
    );
};

export default App;
import {ActiveIndexProvider} from "./context/activeIndexContext";
import AppLayout from "./components/layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import * as H from "history";


const App = () => {
    const history = H.createBrowserHistory()
    return (
        <ActiveIndexProvider>
            <AppLayout history={history} Navbar={<Navbar/>} SideBar={<SideBar/>} Content={"Hello World"}/>
        </ActiveIndexProvider>
    );
};

export default App;
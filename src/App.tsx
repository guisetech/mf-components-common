import ActiveIndexProvider from "./context/activeIndexContext";
import AppLayout from "./components/layout/Layout";


const App = () => {
    return (
        <ActiveIndexProvider>
            <AppLayout/>
        </ActiveIndexProvider>
    );
};

export default App;
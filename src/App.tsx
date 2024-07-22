import AppLayout from "./layout/layout/AppLayout";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();


const App = () => {
    return (
        <AppLayout history={history}></AppLayout>
    );
};

export default App;
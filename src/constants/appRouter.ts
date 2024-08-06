import {createBrowserHistory, History} from "history";
import {allRoutes} from "./enum/allRoutes";

class AppRouter {
    public history: History;

    constructor() {
        this.history = createBrowserHistory();
    }

    public navigateToPath = (path: string) => {
        this.history.push(path);
    };
    public goBack = () => {
        this.history.back();
    };
    public goForward = () => {
        this.history.forward();
    };
    public HomePage = () => {
        this.history.push(allRoutes.homePage);
    };
    // public userListWithFilters = (userListFilters: string) => {
    //   this.history.replace(allRoutes.userList + "?" + userListFilters);
    // };
    // public userEditPage = (userId: string) => {
    //   const userEditRoute = allRoutes.userDetail.replace(":userId", userId);
    //   this.history.push(userEditRoute);
    // };

    public Inbox = () => {
        this.history.push(allRoutes.inbox);
    };
    public About = () => {
        this.history.push(allRoutes.about);
    };
    public Messages = () => {
        this.history.push(allRoutes.messages);
    };
    public Features = () => {
        this.history.push(allRoutes.features);
    };
    public Pricing = () => {
        this.history.push(allRoutes.pricing);
    };
    public Gallery = () => {
        this.history.push(allRoutes.gallery);
    };
    public News = () => {
        this.history.push(allRoutes.news);
    };
    public Team = () => {
        this.history.push(allRoutes.team);
    };
    public Analytics = () => {
        this.history.push(allRoutes.analytics);
    };
}
 export default  AppRouter;
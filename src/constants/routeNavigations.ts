import {RouteDefinition} from "../types/routeDefinitions";
import {allRoutes} from "./enum/allRoutes";

export const routeNavigations: RouteDefinition[] = [
    {
        title: "Home Page",
        path: allRoutes.homePage,
        isVisibleInMenu: true,
        exact: true,
    },
    {
        title: "About",
        path: allRoutes.about,
        //component: ,
        exact: true,
    },
    {
        title: "Inbox",
        path: allRoutes.inbox,
        //component: AccountInformation,
        exact: true,
        // subRoutes: [
        //     {
        //         title: 'HMRC Filing Details',
        //         path: allRoutes.hmrcFilingDetails,
        //         component: HMRCFilingDetailsPage,
        //         isVisibleInMenu: false,
        //         exact: false,
        //     },
        //     {
        //         title: 'Companies House Details',
        //         path: allRoutes.cosHsefilingDetails,
        //         component: CosHseFilingDetailsPage,
        //         isVisibleInMenu: false,
        //         exact: false,
        //     },
        // ],
    },
    {
        title: "Messages",
        path: allRoutes.messages,
        exact: false,
        //component: System,
        // subRoutes: [
        //     {
        //         title: 'Record Locks',
        //         path: allRoutes.recordLocks,
        //         component: RecordLocksListPage,
        //         isVisibleInMenu: false,
        //         exact: false,
        //     },
        // ],
    },
    {
        title: "Pricing",
        path: allRoutes.pricing,
        //component: UserList,
        exact: true,
    },
    {
        title: "News",
        path: allRoutes.news,
        //component: UserList,
        exact: true,
    },
    {
        title: "Features",
        path: allRoutes.features,
        //component: UserList,
        exact: true,
    },
    {
        title: "Gallery",
        path: allRoutes.gallery,
        //component: UserList,
        exact: true,
    },
    {
        title: "Team",
        path: allRoutes.team,
        //component: UserList,
        exact: true,
    },
    {
        title: "Analytics",
        path: allRoutes.analytics,
        //component: UserList,
        exact: true,
    },
    {
        title: "Gallery",
        path: allRoutes.gallery,
        //component: UserList,
        exact: true,
    },
    {
        title: "Orders",
        path: allRoutes.orders,
        //component: UserList,
        exact: true,
    },
    {
        title: "Schedules",
        path: allRoutes.schedules,
        //component: UserList,
        exact: true,
    },
    {
        title: "Settings",
        path: allRoutes.settings,
        //component: UserList,
        exact: true,
    },
];
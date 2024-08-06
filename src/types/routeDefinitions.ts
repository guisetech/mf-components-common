export type RouteDefinition = {
    // Router Props
    path: string;
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    component?: React.ComponentType<any>;
    exact: boolean;
    title?: string;
    subRoutes?: RouteDefinition[];
    isVisibleInMenu?: boolean;
    onSelect?: () => void;
    openInNewTab?: boolean;
};
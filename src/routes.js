const routes = [
    {
        name:"index",
        path:"/",
        containerPath:"./containers/dashboard/index"
    },
    {
        name:"products",
        path:"/products",
        containerPath:"./containers/products/index"
    },
    {
        name:"carts",
        path:"/carts",
        containerPath:"./containers/carts/index"
    },
    {
        name:"users",
        path:"/users",
        containerPath:"./containers/users/index"
    },
    {
        name:"login",
        path:"/login",
        containerPath:"./containers/login/index",
    },
];

export default routes;
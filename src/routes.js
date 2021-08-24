const routes = [
    {
        name:'index',
        path:'/',
        containerPath:'./containers/dashboard/index'
    },
    {
        name:'products',
        path:'/products',
        containerPath:'./containers/products/index'
    },
    {
        name:'carts',
        path:'/carts',
        containerPath:'./containers/carts/index'
    },
    {
        name:'users',
        path:'/users',
        containerPath:'./containers/users/index'
    },
];

export default routes;
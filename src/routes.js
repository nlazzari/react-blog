import Home from './containers/Home';
import Post from './containers/Post';


export const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/post/:id',
        component: Post,
        exact: false,
    },
];
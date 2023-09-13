import Gallery from "../Page/Gallery";
import Home from "../Page/Home";
import LoginPage from "../Page/Login";


export default[
    {
        id: 0,
        path:'/',
        exact: true,
        component: <Home/>
    },
    {
        id: 1,
        path:'/gallery',
        component: <Gallery/>
    },
    {
        id: 2,
        path:'/login',
        component: <LoginPage/>
    }
]
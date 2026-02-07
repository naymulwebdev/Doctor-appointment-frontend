import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Notfound from "../../components/Shared/Notfound/Notfound";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";
import Services from "../../pages/Services/Services";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            },
            {
                path:'/sign-in',
                element:<SignIn></SignIn>
            },

        ]
        
    },
    {
        path:'*',
        element:<Notfound></Notfound>
    }
])

export default router;
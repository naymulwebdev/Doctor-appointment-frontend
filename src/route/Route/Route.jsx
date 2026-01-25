import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Notfound from "../../components/Shared/Notfound/Notfound";



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
                path:'about',
                element:<About></About>
            }
        ]
        
    },
    {
        path:'*',
        element:<Notfound></Notfound>
    }
])

export default router;

import { createBrowserRouter } from "react-router-dom";
import {Blog,Home,Login,Signup,Contact,About,Shop,Checkout }from './pages/index';
import {BlogLayouts, DefaultLayout,GuestLayout, NotFound, ProductDetail }from './component/index';

const Router = createBrowserRouter([
    
    {
        path: '/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/shop',
                element:<Shop/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/product/:id',
                element:<ProductDetail/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/bloglayouts',
                element:<BlogLayouts/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/checkout',
                element:<Checkout/>
            },      
            {
                path:'/login',
                element:<Login/>
            },
            
            {
                path:'/signup',
                element:<Signup/>
             },
             {
                path:'*',
                 element: <NotFound/>
             }
            ]
    }
])

export default Router;
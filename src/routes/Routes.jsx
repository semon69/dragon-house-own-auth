import {
    Navigate,
    createBrowserRouter,

} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Category from "../pages/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import NewsPage from "../pages/NewsPage/NewsPage";
import Register from "../pages/Register/Register";
import LoginLayout from "../layouts/LoginLayout";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Terms/Terms";
const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [
            // {
            //     path: "/",
            //     element: <Category></Category>,
            //     loader: () => fetch('http://localhost:5000/news')
            // },

            {
                path: ":id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: "/news/:id",
                element: <PrivateRoute>
                    <NewsPage></NewsPage>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);
export default router;
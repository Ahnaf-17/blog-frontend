import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Hpme/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllBlog from "../Pages/AllBlog/AllBlog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import WishList from "../Pages/WishList/WishList";
import BlogDetail from "../Pages/BlogDetail/BlogDetail";
import AddBlog from "../Pages/AddBlog/AddBlog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[

        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path: '/allBlogs',
          element:<AllBlog></AllBlog>,
          // loader: ()=> fetch('http://localhost:5000/blogs')
        },
        {
          path: '/wishlist',
          element: <PrivateRoute><WishList></WishList></PrivateRoute>
        },
        {
          path: '/details/:_id',
          element: <BlogDetail></BlogDetail>
        },
        {
          path:'/addBlog',
          element:<AddBlog></AddBlog>
        }
      ]
    },
  ]);
  export default router
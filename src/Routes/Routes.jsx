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
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";

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
          // loader: ()=> fetch('https://blog-server-1qfpy22zn-ahnaf-ahmeds-projects.vercel.app/blogs')
        },
        {
          path: '/wishlist',
          element: <PrivateRoute><WishList></WishList></PrivateRoute>
        },
        {
          path: '/details/:_id',
          element: <BlogDetail></BlogDetail>,
        },
        {
          path:'/addBlog',
          element:<AddBlog></AddBlog>
        },
        {
          path:'/featured',
          element: <FeaturedBlogs></FeaturedBlogs>
        },
        {
          path:'/updateBlog/:id',
          element: <UpdateBlog></UpdateBlog>
        }
      ]
    },
  ]);
  export default router
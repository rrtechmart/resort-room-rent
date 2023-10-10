import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import RoomDetails from "../Pages/Home/Room/RoomDetails";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'room/:id',
          element: <RoomDetails/>
        }
      ]
    },
    {
      path:'login',
      element: <Login/>
    },
    {
      path:'signUp',
      element: <SignUp/> 
    }
  ]);
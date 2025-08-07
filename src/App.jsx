import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import ResetPassword from "./pages/ResetPassword"
import ForgotPassword from "./pages/ForgotPassword"

const routes = [
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/forgotPassword",
    element:<ForgotPassword/>
  },
  {
    path:"/reset-password/:token",
    element:<ResetPassword/>
  },
  
]

const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,

  },
})






const App = () => {
  return (

       <RouterProvider
      router={router} 
      future={{ v7_startTransition: true }}/>


  )
}

export default App
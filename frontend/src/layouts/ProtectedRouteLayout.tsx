import { Navigate, Outlet } from "react-router-dom"


const ProtectedRouteLayout = () => {
    const auth = {token: false}
  return (
    auth.token ? <Outlet /> : <Navigate to="/login"/>
  )
}

export default ProtectedRouteLayout
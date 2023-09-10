import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "@/state/app/hook"


const ProtectedRouteLayout = () => {
    const { username , password } = useAppSelector((state) => state.auth)
    const isLoggedIn = username !== "" && password !== ""
  return (
    isLoggedIn ? <Outlet /> : <Navigate to="/login"/>
  )
}

export default ProtectedRouteLayout
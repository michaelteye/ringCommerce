import {Navigate, Outlet } from "react-router-dom"
import { useAuth } from '../../Components/auth/Login/AuthProvider' 

const ProtectedRoute = () => {
  const user = useAuth()

  return(
    user.access_token ? <Outlet/> : < Navigate to="/login"/> 
  )
  
}
export default ProtectedRoute
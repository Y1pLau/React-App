import { Navigate, Outlet } from "react-router-dom";
import { useSelector} from 'react-redux';
const PrivateRoute=()=>{
    const isAuthenticated=  useSelector((state) => state.authentication.isAuthenticated);
    console.log(isAuthenticated);
    return isAuthenticated? <Outlet/>:<Navigate to="/login" replace />;
};
export default PrivateRoute;
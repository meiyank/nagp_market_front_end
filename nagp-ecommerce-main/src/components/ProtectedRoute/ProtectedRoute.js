import { Outlet, Navigate } from 'react-router-dom'
import { useSelector} from 'react-redux';
import { selectUser } from '../../store/loginSlice';


const ProtectedRoutes = () => {
    const user = useSelector(selectUser);
    const isLoggedInUser = user ? true : false
    return(
        isLoggedInUser ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes
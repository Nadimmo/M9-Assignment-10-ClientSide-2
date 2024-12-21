/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    if(loader){
        <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;
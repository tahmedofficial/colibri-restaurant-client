import PropTypes from "prop-types";
import { Spinner } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <Spinner className='flex mx-auto' aria-label="Extra large spinner example" size="xl" />
    }

    if (user) {
        return children;
    }

    return (<Navigate to="/login" state={location.pathname}></Navigate>);
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}
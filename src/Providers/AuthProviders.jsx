import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {

    const authInfo = {

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node
}
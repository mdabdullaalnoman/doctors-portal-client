import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';



const PirvateRoute = ({ children, ...rest }) => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const getEmail = JSON.parse(sessionStorage.getItem('info'));


    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email || getEmail ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PirvateRoute;
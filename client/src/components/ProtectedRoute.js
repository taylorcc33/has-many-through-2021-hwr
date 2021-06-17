//How we will use this.
// Think of this Protected Route that has the ability to render out desired component if we have a valid user or redirect to a login page if we do not

//  Remember we wrap all of our components in a FetchUser which see if we have an Authenteciated user and will set the user in our AuthProvider

// we go from this...
// <Route exact path="/thingsDemo" component={ThingsDemo} />

// to this...
// <FetchUser>
//    <ProtectedRoute exact path="/thingsDemo" component={ThingsDemo} />
// </FetchUser>

import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import { AuthContext } from '../providers/AuthProvider'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { authenticated } = useContext(AuthContext)

    return (
        <Route {...rest} render={(props) => (
            authenticated ? (
                <Component {...props} />
            ) :
                (
                    <Redirect to={
                        {
                            pathname: '/login',
                            state: { from: props.location }
                        }} />
                )
        )} />
    )
}
export default ProtectedRoute
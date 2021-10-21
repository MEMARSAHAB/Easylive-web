import React from 'react'
import { Route,Redirect } from 'react-router'
import { AuthContext } from '../context/authcontext'

export const ProtectedRoute = ({isPrivate,...props}) =>{
    
    const {IsLoggedIn} = React.useContext(AuthContext)

    if(isPrivate && IsLoggedIn){
        return( <Route {...props}/> )
    }else{
        return( <Redirect to='/'/> ) 
    }
}
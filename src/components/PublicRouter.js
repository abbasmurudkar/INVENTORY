import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

function PublicRouter({children, ...routeProps}) {
    const profile = false
    if (profile)
    {
        return <Redirect to="/home"/>
    }
    return (
        <Route {...routeProps}>
        {children}
    </Route>
    )
}
export default PublicRouter

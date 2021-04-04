import {useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import{authSelectors} from '../redux/auth'

export default function PrivatRoute({
  isAuthed,
  redirectTo,
  children,
  ...routeProps
}) {
  const isloggedIn = useSelector(authSelectors.getAuthed)
  return (
    <Route
      {...routeProps}>
      {isloggedIn ?  children  : <Redirect to={redirectTo} />}
    </Route>
      
  )
}



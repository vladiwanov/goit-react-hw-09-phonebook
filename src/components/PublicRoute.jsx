import {useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { authSelectors } from '../redux/auth';


export default function PublicRoute({
  isAuthed,
  redirectTo,
  children,
  ...routerProps
  }) {
  const isloggedIn = useSelector(authSelectors.getAuthed);
  return <Route {...routerProps}>
    {isloggedIn && routerProps.restricted ? (
      <Redirect to={redirectTo} />) : (
      children
    )}
  </Route>
}


// const mapStateToProps = state => ({
//   isAuthed: authSelectors.getAuthed(state),
// })
// export default connect(mapStateToProps)(PublicRoute);
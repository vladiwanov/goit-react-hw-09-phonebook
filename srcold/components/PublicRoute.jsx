import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { authSelectors } from '../redux/auth';


const PublicRoute = ({
  component: Component,
  isAuthed,
  redirectTo,
  ...routeProps
}) => (<Route {...routeProps}
  render={props =>
    isAuthed && routeProps.restricted
      ? (<Redirect to={ redirectTo}/>)
      : (<Component {...props} />)
  }
/>);

const mapStateToProps = state => ({
  isAuthed: authSelectors.getAuthed(state),
})
export default connect(mapStateToProps)(PublicRoute);
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import{authSelectors} from '../redux/auth'

const PrivatRoute = ({
  component: Component,
  isAuthed,
  redirectTo,
  ...routeProps
}) => (<Route
  {...routeProps}
  render={props => isAuthed ? <Component {...props} /> : <Redirect to={redirectTo} />
  }
/>
)

const mapStateToProps = state => ({
  isAuthed: authSelectors.getAuthed(state)
}) 

export default connect(mapStateToProps)(PrivatRoute);
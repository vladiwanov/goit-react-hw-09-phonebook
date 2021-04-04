import { Switch, Route } from "react-router";
import { Component , Suspense, lazy} from "react";
import AppBar from './components/AppBar';
import { connect } from "react-redux";
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';

const HomePageView = lazy(() => import('./views/HomePageView/HomePageView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const ContactsPageView = lazy(() => import('./views/ContactsPageView/ContactsPageView'));

class App extends Component {
  state = {}

  componentDidMount() {
    this.props.onGetCurrentUser()
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback = {<p>Loadig...</p>}>
        <Switch>
          <PublicRoute
            path="/register"
            restricted
            component={RegisterView}
            redirectTo ="/contacts"
          />
          <PublicRoute
            path="/login"
            restricted
            component={LoginView}
            redirectTo ="/contacts"
          />
          <PrivateRoute
            path="/contacts"
            redirectTo='/login'
            component={ContactsPageView}
          />
          <Route exact path="/" component={HomePageView} />
          </Switch>
      </Suspense>
      </>
    )

  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
}

export default connect(null, mapDispatchToProps)(App)
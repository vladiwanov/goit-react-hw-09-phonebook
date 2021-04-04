import { Switch, Route } from "react-router";
import {Suspense, lazy, useEffect} from "react";
import AppBar from './components/AppBar';
import { useDispatch } from "react-redux";
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';

const HomePageView = lazy(() => import('./views/HomePageView/HomePageView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const ContactsPageView = lazy(() => import('./views/ContactsPageView/ContactsPageView'));

export default function App () {
  const dispatch = useDispatch();
  const onGetCurrentUser = () => dispatch(authOperations.getCurrentUser())
  
  useEffect(() => {
    onGetCurrentUser();
  },)


    return (
      <>
        <AppBar />
        <Suspense fallback = {<h2>Loadig...</h2>}>
        <Switch>
            <PublicRoute path="/register" restricted redirectTo="/contacts" >
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts" >
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo='/login'>
              <ContactsPageView />
            </PrivateRoute >
            <Route exact path="/" >
              <HomePageView />
            </Route>
            
          </Switch>
      </Suspense>
      </>
    )
  }
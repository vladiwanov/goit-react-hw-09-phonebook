
import Navigation from './Navigation';
import AuthNav from './AuthNav'
import { connect } from 'react-redux';
import {authSelectors} from '../redux/auth';
// import ContactsPageView from '../views/ContactsPageView';
import UserMenu from './UserMenu';


const AppBar = ({ isAuthed = false }) => {
  return (
    <header className="app-bar" >
      <Navigation className="items" />
      {!isAuthed? <AuthNav className="items"/>:<UserMenu className="items"/>}
    </header>
  )
}

const mapStateToProps = (state) => ({ isAuthed: authSelectors.getAuthed(state) })


export default connect(mapStateToProps)(AppBar);
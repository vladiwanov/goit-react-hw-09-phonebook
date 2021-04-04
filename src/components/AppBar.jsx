
import Navigation from './Navigation';
import AuthNav from './AuthNav'
import { useSelector } from 'react-redux';
import {authSelectors} from '../redux/auth';
import UserMenu from './UserMenu';


export default function AppBar (){
  const isAuthed = useSelector(authSelectors.getAuthed)

  return (
    <header className="app-bar" >
      <Navigation className="items" />
      {!isAuthed? <AuthNav className="items"/>:<UserMenu className="items"/>}
    </header>
  )
}

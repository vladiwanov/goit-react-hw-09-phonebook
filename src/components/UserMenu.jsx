import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from '../redux/auth';

export default function UserMenu () {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.userName)
  const onLogout = useCallback (() => dispatch(authOperations.logOut()),[dispatch])


  return (
    <nav className='userMenu'>
      <h3 className="h3" >Welcome {name}</h3>
      <button
        type='button'
        className="button"
        onClick={onLogout}
      >
        Logout
      </button>
    </nav>
  )
}
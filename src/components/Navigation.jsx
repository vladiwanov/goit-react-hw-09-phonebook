import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from '../redux/auth';

export default function Navigation() {
  const isAuthed = useSelector(authSelectors.getAuthed);
  return (
    <nav>
      <NavLink
        exact to="/"
        className="items"
      >
        Главная
      </NavLink>
      {isAuthed&& <NavLink
        exact to="/contacts"
        className="items"
      >
        Контакты
      </NavLink>}
    </nav>
  )
}

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from '../redux/auth';

const Navigation = ({isAuthed}) => {
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
const mapStateToProps = state => ({
  isAuthed:authSelectors.getAuthed(state),
})

export default  connect(mapStateToProps)( Navigation);
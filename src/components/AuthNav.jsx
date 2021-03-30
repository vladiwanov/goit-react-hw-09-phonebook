import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register" 
        className="items"
      >
        Регистрация
      </NavLink>
      <NavLink to="/login" 
        className="items"
      >
        Вход
      </NavLink>
    </nav>
      

  )
}

export default AuthNav;
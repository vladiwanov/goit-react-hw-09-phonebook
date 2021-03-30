import { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from '../../redux/auth';
import s from './LoginView.module.css';


class LoginView extends Component {
  state = {
    email: '',
    password: '',
  }

  onHandleChange = ({target:{name, value}}) => {
    this.setState({[name]:value})
}

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state)
    this.setState({ email: '', password: '' })
  }
  

  render() {
  const { email, password } = this.state;
    return (

      <div className={s.loginForm}>
        <h2>Войти на сайт</h2>
        <form
          className={s.formContent}
          onSubmit={this.onHandleSubmit}
          
      >
        <label >
          <input
            type="email"
            name='email'
            value={email}
              onChange={this.onHandleChange}
              className={s.formInput}
          />
        </label>
        <label >
          <input
            type="password"
            name='password'
            value={password}
              onChange={this.onHandleChange}
              className={s.formInput}
          />
        </label>
        <button
          type="submit"
          // className={s.formRegisterButton}
          className={s.button}
          disabled={!email||!password}
        >
          Войти
      </button>
      </form>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSubmit:(item)=> dispatch(authOperations.logIn(item))
  }
}

export default connect(null, mapDispatchToProps)(LoginView);
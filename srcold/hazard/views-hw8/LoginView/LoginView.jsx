import { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { authOperations, authSelectors } from '../../redux/auth';
import s from './LoginView.module.css';
import { loginError } from '../../redux/auth/auth-actions';
import AlertMessage from '../../components/Alert/AlertMessage';


class LoginView extends PureComponent {
// class LoginView extends Component {
  state = {
    email: '',
    password: '',
    errorStatus: false,
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState !== this.state) {
    //   return
    // }
    if (this.props.errorState) {
      this.showAlert()
      return
    }
  }
    
    showAlert = () => {
      this.setState({ errorStatus: true });
      setTimeout(() => {
        this.props.onRemoveError();
        this.setState({ errorStatus: false });
        this.resetForm();
      }, 2000);
    }
  
  resetForm = () => {
    this.setState({ email: '', password: '',  });
  };


  onHandleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state)
  }
  
  

  render() {
    const { email, password, errorStatus } = this.state;

    return (


      <div className={s.loginForm}>
        <h2>Войти на сайт</h2>
        {errorStatus && <AlertMessage alert={`ошибка авторизации ${this.props.errorState}`} />}

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
              placeholder="Email"
            />
          </label>
          <label >
            <input
              type="password"
              name='password'
              value={password}
              onChange={this.onHandleChange}
              className={s.formInput}
              placeholder="Password"
            />
          </label>
          <button
            type="submit"
            // className={s.formRegisterButton}
            className={s.button}
            disabled={!email || !password}
          >
            Войти
      </button>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  errorState: authSelectors.getError(state)
})

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (item) => dispatch(authOperations.logIn(item)),
     onRemoveError: ()=> dispatch(loginError(null))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
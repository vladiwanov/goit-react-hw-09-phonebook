import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations , authSelectors} from '../../redux/auth';
import s from './RegisterView.module.css';
import { addAuthError } from '../../redux/auth/auth-actions';
import AlertMessage from '../../components/Alert/AlertMessage';


class SignUp  extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    errorStatus: false,
    
  }
  
componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      return
    }
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
    this.setState({name:'' ,email: '', password: '',  });
  };

  onHandleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, })
    
    }
  
  
  handleSubmit = (e) => {
      e.preventDefault();
    this.props.onAuthSubmit(this.state)

    this.setState({ name: '', email: '', password: '', });
  }


  render() {
      const { name, email, password, errorStatus } = this.state;
      
      return (
        <>
          
          <div className={s.registerForm} >
            <h2>Регистрация пользователя</h2>
            {errorStatus && <AlertMessage alert={`ошибка регистрации пользователя. ${this.props.errorState}`} />}
            <form
              className = {s.formContent}
              onSubmit={this.handleSubmit}
              autoComplete='off'
            >
              <label >
              <input
                  className={s.formInput}
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.onHandleChange}
                  placeholder='Name'
                />
            </label>
            <label >
              <input
                  className={s.formInput}
                  type="email"
                  name='email'
                  value={email}
                  onChange={this.onHandleChange}
                  placeholder='Email'
              />
            </label>
            <label >
              <input
                  className={s.formInput}
                  type="password"
                  name='password'
                  value={password}
                  onChange={this.onHandleChange}
                  placeholder='Password'
              />
            </label>
            <button
                type="submit"
                // className={s.formRegisterButton}
                className={s.button}
                disabled={!name||!email||!password}
                
            >
              Зарегистрироваться
            </button>
          </form>
          </div>
        </>
      )
    }
  }

const mapStateToProps = state => ({
  errorState: authSelectors.getError(state)
})

  const mapDispatchToProps = dispatch => {
  return {
    onAuthSubmit: (item) => dispatch(authOperations.addRegister(item)),
     onRemoveError: ()=> dispatch(addAuthError(null)),
  }
}

    export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
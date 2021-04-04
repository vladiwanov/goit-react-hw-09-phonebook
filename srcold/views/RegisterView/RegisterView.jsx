import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './RegisterView.module.css';

class SignUp  extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    
  }
  
  onHandleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value, })
    
    }
  
  
  handleSubmit = (e) => {
      e.preventDefault();
    this.props.onAuthSubmit(this.state)

    this.setState({ name: '', email: '', password: '', });
  }


  render() {
      const { name, email, password, } = this.state;
      
      return (
        <>
          
          <div className={s.registerForm} >
            <h2>Регистрация пользователя</h2>
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


  const mapDispatchToProps = dispatch => {
  return {
    onAuthSubmit: (item) => dispatch(authOperations.addRegister(item))
  }
}

    export default connect(null, mapDispatchToProps)(SignUp);
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from '../../redux/auth';
import s from './LoginView.module.css';
import { loginError } from '../../redux/auth/auth-actions';
import AlertMessage from '../../components/Alert/AlertMessage';


export default function LoginView() {
  const dispatch = useDispatch();
  const errorState = useSelector(authSelectors.getError);
  const onSubmit = () => dispatch(authOperations.logIn({ email, password }))
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);

  
  useEffect(() => {
  errorState ? showAlert(): setErrorStatus(false)
  },)
  
    

  const showAlert = () => {
    setErrorStatus(true);
    setTimeout(() => {
      resetForm();
      dispatch(loginError(null))
    }, 2000);
  }

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setErrorStatus(false);
  };

  const onHandleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default: console.log('incorrect place')
    }
  }
 
  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSubmit()
    }

 
  return (
      <div className={s.loginForm}>
        <h2>Войти на сайт</h2>
        {errorStatus && <AlertMessage alert={`ошибка авторизации ${errorState}`} />}

        <form
          className={s.formContent}
          onSubmit={onHandleSubmit}
        >
          <label >
            <input
              type="email"
              name='email'
              value={email}
              onChange={onHandleChange}
              className={s.formInput}
              placeholder="Email"
            />
          </label>
          <label >
            <input
              type="password"
              name='password'
              value={password}
              onChange={onHandleChange}
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

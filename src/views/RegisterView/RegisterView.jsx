import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations , authSelectors} from '../../redux/auth';
import s from './RegisterView.module.css';
import { addAuthError } from '../../redux/auth/auth-actions';
import AlertMessage from '../../components/Alert/AlertMessage';


export default  function SignUp (){
const dispatch = useDispatch();
  const errorState = useSelector(authSelectors.getError);
  const onSubmit = () => dispatch(authOperations.addRegister({ name, email, password }))
  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  

  useEffect(() => {
  console.log('ошибка с бека...',errorState);
  errorState ? showAlert(): setErrorStatus(false)
  },)
  

  const showAlert = () => {
    setErrorStatus(true);
    setTimeout(() => {
      resetForm();
      dispatch(addAuthError(null))
    }, 2000);
  }
  
  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setErrorStatus(false);
  };

  
  const onHandleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value)
        break
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
        <>
          
          <div className={s.registerForm} >
            <h2>Регистрация пользователя</h2>
            {errorStatus && <AlertMessage alert={`ошибка регистрации пользователя. ${errorState}`} />}
            <form
              className = {s.formContent}
              onSubmit={onHandleSubmit}
              autoComplete='off'
            >
              <label >
              <input
                  className={s.formInput}
                  type="text"
                  name="name"
                  value={name}
                  onChange={onHandleChange}
                  placeholder='Name'
                />
            </label>
            <label >
              <input
                  className={s.formInput}
                  type="email"
                  name='email'
                  value={email}
                  onChange={onHandleChange}
                  placeholder='Email'
              />
            </label>
            <label >
              <input
                  className={s.formInput}
                  type="password"
                  name='password'
                  value={password}
                  onChange={onHandleChange}
                  placeholder='Password'
              />
            </label>
            <button
                type="submit"
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
import { useState, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';
import s from './Alert.module.css';

const AlertMessage = ({alert}) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    showAlert()
  },[])
  
  const showAlert = () => {
    setStatus(true);
    setTimeout(() => setStatus(false), 1700);
  }
  return (
    <>
      <CSSTransition in={status} classNames={s} unmountOnExit timeout={250} >
        <p className={s.alert}> {alert}</p>
      </CSSTransition>
    </>
  );
}
export default  AlertMessage;
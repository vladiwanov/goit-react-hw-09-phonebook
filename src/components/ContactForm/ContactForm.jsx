import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../Alert/Alert';
import s from './ContactForm.module.css';
import { CSSTransition } from 'react-transition-group';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';


export default function ContactForm() {
  const dispatch = useDispatch();
  const contactList = useSelector(contactsSelectors.getContactlist)
  const onSubmit = () => dispatch(contactsOperations.addContact({ name, number }))
  
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [alert, setAlert] = useState('')
  const [isDplt, setIsDplt] = useState(false);
  
const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break
      case 'number':
        setNumber(value); break;
      default: console.warn('wrong place');
  }
}
  
  const formSubmit = e => {
    e.preventDefault();  
    if (contactList.find(item => item.name.toLowerCase() === name.toLowerCase()))
    {
      setAlert('Contact already exist');
      showAlert();
      return;
    }
    if (name.trim() === '' || name === null) {
      setAlert('введите слово');
      showAlert()
      return
    }
    onSubmit();
    resetForm();
    return
    };

 
  const showAlert = () => {
    setIsDplt(true)
    setTimeout(() => {
      setIsDplt(false);
      resetForm();
    }, 2000);
}

  const resetForm = () => {
    setName('');
    setNumber('');
    setIsDplt(false)
    setAlert('')
  }

    return (
      <>
        <CSSTransition in={isDplt} classNames={s} unmountOnExit timeout={250} >
          <Alert text={alert}/>
        </CSSTransition>
        
        <form className={s.form} onSubmit={formSubmit}>
          <label  className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
            />
          </label>
          <button
            className={s.button}
            type="submit"
            // disabled={!name.trim()}
            disabled={!name}
          >
            Add contact
          </button>
        </form>
      </>
    );
  }
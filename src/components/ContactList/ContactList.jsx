import ContactsItem from '../ContactsItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {contactsSelectors} from '../../redux/contacts';

export default function ContactList() {

  const list = useSelector(contactsSelectors.getFilteredContacts)

  return(
  <section className={s.contacts}>
    <TransitionGroup component="ul" className={s.list} >
      {list.map(item => (
        <CSSTransition key={item.id} timeout={250} classNames={s} unmountOnExit>
          <ContactsItem item={item} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </section>
  )};

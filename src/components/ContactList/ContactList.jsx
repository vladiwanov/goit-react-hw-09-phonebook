import PropTypes from 'prop-types';
import ContactsItem from '../ContactsItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import {contactsSelectors} from '../../redux/contacts';

const ContactList = ({list}) => (
  <section className={s.contacts}>
    <TransitionGroup component="ul" className={s.list} >
      {list.map(item => (
        <CSSTransition key={item.id} timeout={250} classNames={s} unmountOnExit>
          <ContactsItem item={item} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </section>
);

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  list: contactsSelectors.getFilteredContacts(state)
});

export default  connect(mapStateToProps)(ContactList);

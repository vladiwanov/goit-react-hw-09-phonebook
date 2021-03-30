import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter/Filter';
import s from './App.module.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {contactsSelectors, contactsOperations} from './redux/contacts';


const App = ({items, isloading}) => (
      <>
      <section className={s.phonebook}>
      <div className={s.container}>
        {isloading && <h2>Loading</h2>}
        {/* {!isloading && <div> */}
           <CSSTransition
            in={true}
            timeout={500}
            classNames={s}
            appear={true}>
            <h1 className={s.h1}>Phonebook</h1>
          </CSSTransition>     
            <ContactForm />
          {items.length>1 && <Filter/>}
            <ContactList/>
        {/* </div>} */}
         
        </div>
        </section>
      </>
    );

const mapStateToProps = (state) => ({
  items: contactsSelectors.getItems(state),
  isloading: contactsSelectors.getLoadingStatus(state),
})

const mapDispatchToProps = dispatch => ({
  fetchContacts: dispatch(contactsOperations.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter/Filter';
import s from './ContactsPageView.module.css';
import { CSSTransition } from 'react-transition-group';
import {useDispatch, useSelector } from 'react-redux';
import {contactsSelectors, contactsOperations} from '../../redux/contacts';
import { useEffect } from 'react';


export default function ContactsPageView() {
  // const dispatch = useDispatch();
  const items = useSelector(contactsSelectors.getItems);
  console.log('то , что приходит из бека при первом рендере....',items);
  const isloading = useSelector(contactsSelectors.getLoadingStatus);
  // const fetchContacts = () => dispatch(contactsOperations.fetchContacts)

return(
  <>
    <section className={s.phonebook}>
      <div className={s.container}>
        {isloading && <h2>Loading</h2>}
       {!isloading && <div>
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
        </div>}
      </div>
    </section>
  </>
)};







// import ContactForm from '../../components/ContactForm';
// import ContactList from '../../components/ContactList';
// import Filter from '../../components/Filter/Filter';
// import s from './ContactsPageView.module.css';
// import { CSSTransition } from 'react-transition-group';
// import { connect } from 'react-redux';
// import {contactsSelectors, contactsOperations} from '../../redux/contacts';


// const ContactsPageView = ({ items, isloading }) => (
//       <>
//       <section className={s.phonebook}>
//       <div className={s.container}>
//         {isloading && <h2>Loading</h2>}
//         {!isloading && <div>
//            <CSSTransition
//             in={true}
//             timeout={500}
//             classNames={s}
//             appear={true}>
//             <h1 className={s.h1}>Phonebook</h1>
//           </CSSTransition>     
//             <ContactForm />
//           {items.length>1 && <Filter/>}
//             <ContactList/>
//         </div>}
         
//         </div>
//         </section>
//       </>
//     );

// const mapStateToProps = (state) => ({
//   items: contactsSelectors.getItems(state),
//   isloading: contactsSelectors.getLoadingStatus(state),
// })

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: dispatch(contactsOperations.fetchContacts()),
// });

// // export default connect(mapStateToProps, mapDispatchToProps)(ContactsPageView);
// export default connect(mapStateToProps)(ContactsPageView);



import { AiOutlineClose } from 'react-icons/ai';
import s from './ContactsItem.module.css';
import {contactsOperations} from '../../redux/contacts';
import { connect } from 'react-redux';

const ContactsItem = ({ item , onDelete }) => {
  return (
    <>
        <li className={s.item}>
          <p className={s.stringElem}>{item.name}:</p>
          <p>{item.number}</p>
          <button className={s.button} type="button" onClick={() => onDelete(item.id)}>
            <AiOutlineClose className={s.icon} />
          </button>
        </li>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  onDelete: (id)=>dispatch(contactsOperations.deleteContact(id))
})

export default connect(null, mapDispatchToProps) (ContactsItem)
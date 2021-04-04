import { AiOutlineClose } from 'react-icons/ai';
import s from './ContactsItem.module.css';
import {contactsOperations} from '../../redux/contacts';
import { useDispatch } from 'react-redux';

export default function ContactsItem({item:{name,number,id}}) {

  const dispatch = useDispatch()
  const onDelete = () => dispatch(contactsOperations.deleteContact(id))

  return (
    <>
        <li className={s.item}>
          <p className={s.stringElem}>{name}:</p>
          <p>{number}</p>
          <button className={s.button} type="button" onClick={onDelete}>
            <AiOutlineClose className={s.icon} />
          </button>
        </li>
    </>
  )
}

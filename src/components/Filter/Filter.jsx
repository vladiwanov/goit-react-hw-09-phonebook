import { useDispatch } from 'react-redux';
import s from './Filter.module.css';
import {changeFilter} from '../../redux/contacts/contacts-actions';

export default function Filter() {
   const dispatch = useDispatch()
   const onChange = (e) => dispatch(changeFilter(e.target.value));

  
  return(
  <section className={s.filter}>
    <p className={s.filterName}>
      Find contact by name
    </p>
    <label>
      <input
        className={s.input}
        type='value'
        onChange={onChange}
      />
    </label>
  </section>
);}







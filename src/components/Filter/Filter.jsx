import { connect } from 'react-redux';
import s from './Filter.module.css';
import {changeFilter} from '../../redux/contacts/contacts-actions';
// import {contactsActions} from '../../redux/contacts';
// const { changeFilter } = contactsActions;
// console.log('12345678965432567896543::::', contactsActions);

const Filter = ({onChange }) => (
  <section className={s.filter}>
    <p className={s.filterName}>
      Find contact by name
    </p>
    <label>
      <input
        className={s.input}
        type="text"
        onChange={onChange}
      />
    </label>
  </section>
);

const mapDispachToProps = dispatch => ({
  onChange: (event) => dispatch(changeFilter(event.target.value))
})
export default connect(null, mapDispachToProps)(Filter);





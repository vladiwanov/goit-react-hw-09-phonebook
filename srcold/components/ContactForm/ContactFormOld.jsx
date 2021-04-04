import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from '../../../src/components/Alert/Alert';
import s from './ContactForm.module.css';
import { CSSTransition } from 'react-transition-group';
import {contactsSelectors, contactsOperations} from '../../../src/redux/contacts';




class ContactForm extends Component {
  state = {
    name: '',
    // name: null,
    number: '',
    isDuplicate: false,
    alert:'',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    
    if (this.props.contactList.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      this.setState({ alert: 'Contact already exist' });
      this.showAlert();
      return;
    }
    if (name.trim() === '' || name === null) {
    this.setState({ alert: 'введите слово' });
      this.showAlert()
      return
    }
    this.props.onSubmit({ name, number });
      this.resetForm();
      return
    };

 
  showAlert = () => {

    this.setState({ isDuplicate: true });
    setTimeout(() => this.setState({ isDuplicate: false }), 3000);
    this.resetForm();
}

  resetForm = () => {
    this.setState({ name: '', number: '', });
  };

  render() {
    const { isDuplicate, alert} = this.state;
    return (
      <>
        <CSSTransition in={isDuplicate} classNames={s} unmountOnExit timeout={250} >
          <Alert text={alert}/>
        </CSSTransition>
        
        <form className={s.form} onSubmit={this.formSubmit}>
          <label htmlFor={this.nameInputId} className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={this.numberInputId} className={s.label}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button
            className={s.button}
            type="submit"
            disabled={!this.state.name.trim()}
            
          >
            Add contact
          </button>
        </form>
      </>
    );
  }
}


const mapStateToProps = state => {
  return { contactList: contactsSelectors.getContactlist(state) }}
  

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (item) => dispatch(contactsOperations.addContact(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

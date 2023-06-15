import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "redux/selectors";
import { addContact } from "redux/operations";
import css from './ContactForm.module.css';

export default function ContactForm () {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        
        switch(e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'number':
                setNumber(e.target.value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
      
      if(contacts.some(contact => contact.name === name)) {
        alert(`${name} is already in contacts`);
        return;
      }       
        e.preventDefault();
        const newContact = {
          name: name,
          phone: number,
        };
        dispatch(addContact(newContact)); 
        e.currentTarget.reset();
    };

      return (
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.formFields}>
            <label>
              Name
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
            />
            </label>
            <label>
              Number
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
            />
            </label>
          </div>
          <button type="submit" className={css.formBtn}>Add contact</button>
        </form>
        );     
};
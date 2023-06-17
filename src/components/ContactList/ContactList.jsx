import React from "react";
import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "redux/contacts/selectors";
import Contact from "components/Contact/Contact";
import css from './ContactList.module.css';

export default function ContactList () {
  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectFilter); 

  const getVisibleContacts = () => {
    
    if (filter === '') {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({name}) => 
    name.toLowerCase().includes(normalizedFilter));
  };

  return (
  <ul className={css.list}>
  {getVisibleContacts().map(({id, name, number}) => (
    <Contact 
    id={id}
    name={name}
    number={number}
    />
  ))}
  </ul>
  );       
};
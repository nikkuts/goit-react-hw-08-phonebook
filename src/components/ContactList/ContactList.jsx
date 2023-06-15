import React from "react";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import Contact from "components/Contact/Contact";
import css from './ContactList.module.css';

export default function ContactList () {
  const contacts = useSelector(getContacts); 
  const filter = useSelector(getFilter); 

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
  {getVisibleContacts().map(({id, name, phone}) => (
    <Contact 
    id={id}
    name={name}
    number={phone}
    />
  ))}
  </ul>
  );       
};
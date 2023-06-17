import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { selectIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";

export default function Contacts () {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
        <h1>Phonebook</h1>
        <ContactForm />   
        <h2>Contacts</h2>
        <Filter/>
        <div>{isLoading && <b>Request in progress...</b>}</div>  
        <ContactList/> 
    </>
  );       
};
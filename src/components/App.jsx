import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading } from "redux/selectors";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export default function App () {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
      
    return (
        <div>
          <h1>Phonebook</h1>
            <ContactForm />   
          <h2>Contacts</h2>
            <Filter/>
            {isLoading && !error && <b>Request in progress...</b>}  
            <ContactList/> 
        </div>
      );
};
import Contacts from "./Contacts";
import Filter from "./Filter";
import Form from "./Form";
import { Title, Title2 } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOperations";
import {getError, getIsLoading} from "../redux/selectors"

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  console.log('hello');
  
  return (
      <>
        <Title>Phonebook</Title>
        <Form/>
        <Title2>Contacts</Title2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <Contacts/>
      </>
    )
}

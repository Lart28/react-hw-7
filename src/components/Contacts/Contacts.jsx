import { useDispatch, useSelector } from "react-redux";
import { Button, Text, List } from "./Contacts.styled";
import { getContacts, getFilter } from "../../redux/selectors"
import { deleteContact } from "../../redux/contactsOperations";

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  if (filteredContacts.length !== 0) {
    return (
      <List>
        {filteredContacts.map(({ name, phone, id }) => (
          <li key={name}>
            <Text>{name}<br></br> {phone}</Text>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Button>
          </li>
        ))}
      </List>
    )
  }
}

export default Contacts;
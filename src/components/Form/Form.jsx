import React from "react";
import { nanoid } from 'nanoid';
import { Forma, Button, Label } from "./Form.styled";
import { Formik, Field, ErrorMessage} from "formik";
import * as yup from 'yup'; 
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOperations";

const nameId = nanoid();
const telId = nanoid();
const initialValues = {
  name: '',
  phone: '',
} 
const schema = yup.object().shape({
  name: yup.string().max(16).required(),
  phone: yup.string().min(3).max(16).required(),
});
  
const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const handleSubmit = (values, { resetForm }) => {
    const contactNames = contacts.map(contact => contact.name);
    contactNames.includes(values.name)
      ? alert(`${values.name} is already in contacts.`)
      : dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <Forma>
        <Label htmlFor={nameId}>Name
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="div"/>
        </Label>
        <Label htmlFor={telId}>Number
          <Field type="tel" name="phone" id={telId} />
          <ErrorMessage name="phone" component="div"/>
        </Label>
        <Button type="submit">Add contact</Button>
      </Forma>
    </Formik>
  )
}

export default Form;
import axios from "axios";

axios.defaults.baseURL = 'https://66006fc487c91a1164195496.mockapi.io/contacts';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
}

export async function addContact({name, phone}) {
    const { data } = await axios.post('/contacts', {
        name,
        phone,
    });
    return data; 
}

export async function deleteContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`)
    return data;
}
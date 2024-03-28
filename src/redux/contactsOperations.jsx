import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsAPI from '../services/contactsAPI';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await contactsAPI.fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (data, { rejectWithValue }) => {
        try {
            const response = await contactsAPI.addContact(data);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            const response = await contactsAPI.deleteContact(id);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
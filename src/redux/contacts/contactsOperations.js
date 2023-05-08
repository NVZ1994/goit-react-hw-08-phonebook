import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'service/connectionsapi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const contacts = await api.fetchContacts();
      return contacts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    try {
      const contacts = await api.addContact(contactData);
      Notify.success(
        `${contactData.name} has been added to your contacts list`
      );
      return contacts;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async data => {
    try {
      await api.deleteContact(data.id);
      Notify.failure(`${data.name} has been deleted from your contacts list`);
      return data.id;
    } catch (error) {
      console.log(error);
    }
  }
);

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    addContact: {
      reducer({contacts}, action) {
        contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number, 
          },
        };
      },
    },
    deleteContact({contacts}, action) {
      const index = contacts.findIndex(contact => contact.id === action.payload);
      contacts.splice(index, 1);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    }
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist:['contacts']
}

export const contactsReduсer = persistReducer(persistConfig, contactSlice.reducer)

export const { addContact, deleteContact, filterContact } = contactSlice.actions;


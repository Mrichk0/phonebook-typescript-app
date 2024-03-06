import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IContactsState } from "../../interfaces/contacts";
import {
  addNewContacts,
  removeContact,
  fetchContacts,
} from "./contactsOperations";

const initialState: IContactsState = {
  contacts: [],
  loading: false,
  error: null,
};

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
      })
      .addCase(addNewContacts.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addNewContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload);
      })
      .addCase(removeContact.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

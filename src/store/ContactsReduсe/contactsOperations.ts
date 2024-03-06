import { createAsyncThunk } from "@reduxjs/toolkit";
import { IContact } from "../../interfaces/contacts";
import { instance } from "../AuthReduсe/authOperation";

export const fetchContacts = createAsyncThunk<
  IContact[],
  void,
  { rejectValue: string }
>("contacts/fetchContacts", async function (_, { rejectWithValue }) {
  try {
    const response = await instance.get("/contacts");
    return response.data;
  } catch (e: any) {
    rejectWithValue(e.message);
  }
});

export const addNewContacts = createAsyncThunk<
  IContact,
  {
    name: string;
    number: string;
  },
  { rejectValue: string }
>(
  "contacts/addContacts",
  async function ({ name, number }, { rejectWithValue }) {
    try {
      const response = await instance.post("/contacts", { name, number });
      return response.data;
    } catch (e: any) {
      rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk<
  IContact,
  string,
  { rejectValue: string }
>("contacts/deleteContacts", async function (id, { rejectWithValue }) {
  try {
    const response = await instance.delete(`/contacts/${id}`);
    return response.data;
  } catch (e: any) {
    rejectWithValue(e.message);
  }
});

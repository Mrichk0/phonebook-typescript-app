import { IInitialState } from "../../interfaces/auth";
import { IContact } from "../../interfaces/contacts";

export const selectError = (state: IInitialState): null | string =>
  state.contacts.error;
export const selectContacts = (state: IInitialState): IContact[] =>
  state.contacts.contacts;
export const selectLoading = (state: IInitialState): boolean =>
  state.contacts.loading;

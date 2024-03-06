export interface IContact {
  name: string;
  number: string;
  id: string;
}

export type IContactsState = {
  contacts: IContact[];
  loading: boolean;
  error: null | string;
};

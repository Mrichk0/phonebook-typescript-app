import { FC } from "react";

import { IContact } from "../../interfaces/contacts";

import ContactItem from "../ContactItem";

import styled from "styled-components";

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const ContactDetails = styled.div`
  flex: 1;
`;

export const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.danger};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

interface IContactsList {
  contacts: IContact[];
  deleteContact: (id: string) => void;
}

const ContactsList: FC<IContactsList> = ({ contacts, deleteContact }) => {
  return (
    <ContactList>
      {contacts?.map((contact) => (
        <ContactItem
          key={contact.id}
          {...contact}
          deleteContact={deleteContact}
        />
      ))}
    </ContactList>
  );
};

export default ContactsList;

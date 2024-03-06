import { FC } from "react";
import { IContact } from "../../interfaces/contacts";

import styled from "styled-components";
import { DeleteButton } from "../ContactsList/ContactsList";

export const ContactItemStyled = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ContactName = styled.p`
  margin-right: 15px;
`;

interface IContactItem extends IContact {
  deleteContact: (id: string) => void;
}

const ContactItem: FC<IContactItem> = ({ name, number, id, deleteContact }) => {
  return (
    <ContactItemStyled>
      <Contact>
        <ContactName>{name}: </ContactName>
        <p> {number}</p>
      </Contact>

      <DeleteButton onClick={() => deleteContact(id)}>Delete</DeleteButton>
    </ContactItemStyled>
  );
};

export default ContactItem;

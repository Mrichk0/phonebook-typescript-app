import React, { FC, useEffect, useState } from "react";
import Section from "../Section";
import Form from "../ContactForm/ContactForm";
import ContactsList from "../ContactsList";

import Filter from "../Filter";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";

import {
  addNewContacts,
  fetchContacts,
  removeContact,
} from "../../store/ContactsReduсe/contactsOperations";
import Loader from "../shared/Loader";
import styled from "styled-components";
import {
  selectContacts,
  selectLoading,
} from "../../store/ContactsReduсe/contactsSelectors";

const Canvas = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const PhoneBook: FC = () => {
  const [filter, setFilter] = useState<string>("");
  const contacts = useAppSelector(selectContacts);
  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addContacts = (contact: { name: string; number: string }): void => {
    const duplicate = contacts?.filter(({ name }) => name === contact.name);
    if (duplicate.length > 0) {
      alert("you have this contact in your PhoneBook");
      return;
    }

    dispatch(addNewContacts(contact));
  };

  const deleteContact = (id: string): void => {
    dispatch(removeContact(id));
  };

  const filterContacts: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setFilter(value);

  const filteredContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Canvas>
      <Section title={"PhoneBook"}>
        <Form addContacts={addContacts} />
      </Section>

      <Section title={"Contacts"}>
        <Filter filterContacts={filterContacts} />
        {isLoading ? (
          <Loader />
        ) : (
          <ContactsList
            contacts={filteredContacts}
            deleteContact={deleteContact}
          />
        )}
      </Section>
    </Canvas>
  );
};

export default PhoneBook;

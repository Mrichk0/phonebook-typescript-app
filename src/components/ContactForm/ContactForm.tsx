import React, { useState, FC } from "react";
import { FormContainer, FormInput, FormButton } from "../../styles/form.styles";

interface IForm {
  addContacts: (contact: { name: string; number: string }) => void;
}
interface IState {
  name: string;
  number: string;
}

const Form: FC<IForm> = ({ addContacts }) => {
  const [state, setState] = useState<IState>({
    name: "",
    number: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addContacts(state);
    setState({ name: "", number: "" });
  };

  const onHandleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const { name, value } = target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const { name, number } = state;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormInput
        onChange={onHandleChange}
        type="text"
        value={name}
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <FormInput
        onChange={onHandleChange}
        value={number}
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <FormButton type="submit">add</FormButton>
    </FormContainer>
  );
};

export default Form;

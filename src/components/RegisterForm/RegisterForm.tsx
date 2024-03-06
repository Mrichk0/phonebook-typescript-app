import { FC, useState } from "react";
import { signup } from "../../store/AuthReduсe/authOperation";
import { useAppDispatch } from "../../hooks/storeHooks";

import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
} from "../../styles/form.styles";

export interface IInitialState {
  name: string;
  email: string;
  password: string;
}
const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm: FC = () => {
  const [state, setState] = useState<IInitialState>({ ...initialState });

  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(signup(state));
    setState({ ...initialState });
  };

  const { name, password, email } = state;
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput
          value={name}
          onChange={handleChange}
          id="name"
          type="text"
          name="name"
          required
          placeholder="name"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          value={email}
          onChange={handleChange}
          id="email"
          type="text"
          name="email"
          required
          placeholder="email"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput
          value={password}
          onChange={handleChange}
          id="password"
          type="password"
          name="password"
          required
          placeholder="password (more than 8 characters)"
        />
      </FormGroup>
      <FormButton type="submit">Register</FormButton>
    </FormContainer>
  );
};

export default RegisterForm;

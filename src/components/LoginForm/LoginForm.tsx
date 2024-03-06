import { FC, useState } from "react";
import { login } from "../../store/AuthReduсe/authOperation";
import { useAppDispatch } from "../../hooks/storeHooks";

import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
} from "../../styles/form.styles";

const initialState = {
  email: "",
  password: "",
};

interface IInitialState {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
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
    dispatch(login(state));
    setState({ ...initialState });
  };

  const { password, email } = state;
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          value={email}
          onChange={handleChange}
          id="email"
          type="text"
          name="email"
          placeholder="email"
          required
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="password ">Password</FormLabel>
        <FormInput
          value={password}
          onChange={handleChange}
          id="password"
          type="password"
          name="password"
          placeholder="password (more than 8 characters)"
          required
        />
      </FormGroup>
      <FormButton type="submit">Login</FormButton>
    </FormContainer>
  );
};

export default LoginForm;

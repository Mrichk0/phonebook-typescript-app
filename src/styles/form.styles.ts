import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const FormLabel = styled.label`
  display: block;
  font-weight: bold;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const FormButton = styled.button`
  padding: 10px 25px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

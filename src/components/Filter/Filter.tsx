import { FC, ChangeEvent } from "react";
import styled from "styled-components";
import { FormContainer, FormInput } from "../../styles/form.styles";

interface IFilter {
  filterContacts: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Filter: FC<IFilter> = ({ filterContacts }) => {
  return (
    <FormContainer>
      <FormInput type="text" onChange={filterContacts} />
    </FormContainer>
  );
};

export default Filter;

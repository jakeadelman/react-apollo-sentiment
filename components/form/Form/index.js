import React from "react";
import styled from "styled-components";

import FormWrapper from "./Wrapper";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${props =>
    props.loading &&
    "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none"};
`;

const Form = ({ className, wide, ...props }) => (
  <FormWrapper className={className} wide={wide}>
    <StyledForm {...props} />
  </FormWrapper>
);

export default Form;

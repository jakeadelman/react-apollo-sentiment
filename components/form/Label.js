import styled from "styled-components";
import { smallFont } from "../shared/helpers";

const Label = styled.label`
  ${smallFont};
  display: block;
  margin-bottom: 8px;
  color: ${props => props.theme.mutedText};
`;

export default Label;

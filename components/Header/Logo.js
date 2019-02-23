import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { headerItem } from "../shared/helpers";

const HeaderLogo = () => <Logo href="/">tradrr</Logo>;

export default HeaderLogo;

const Logo = styled.div`
  ${headerItem}

  margin-right: auto;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme.normalText};
  text-decoration: none;

  @media (max-width: 425px) {
    padding: 0 8px 0 16px;
    font-size: 19px;
  }
`;

// display: flex;
// align-items: center;
// flex-shrink: 0;
// padding: 0 16px;
// @media (max-width: 425px) {
//   padding: 0 8px;
// }

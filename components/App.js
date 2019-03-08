import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo, faAngleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown);

export default ({ children }) => <main>{children}</main>;

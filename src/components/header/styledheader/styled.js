import styled from "@emotion/styled";

import header_1 from "../../../assets/imgs/header_1.jpg";
import header_2 from "../../../assets/imgs/header_2.jpg";

export const HeaderDiv = styled.div`
  widht: 100%;
  height: 60px;
  background-image: url(${header_1});
  background-repeat: no-repeat;
  background-size: 100%;

  @media only screen and (max-width: 800px) {
    background-image: url(${header_2});
  }
`;

import React from "react";
import styled, { keyframes } from "styled-components";

const Spin = keyframes`from{
    transform:rotate(0deg)
}
to{
    transform:rotate(360deg)
}`;

const Image = styled.img`
  animation: ${Spin} 4s infinite linear;
  background-image: url(/public/img/loading.png);
`;

const Spinner = () => (
  <Image src="/public/img/loading.png" alt="laoding indicator" />
);

export default Spinner;

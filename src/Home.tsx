import * as React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Flex = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  grid-column: 1 / 3;
  text-align: center;
  @media (max-width: 768px) {
    grid-column: 1 / 1;
  }
`;

const Box = styled(Link)`
  background: rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgb(0 0 0 / 60%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: center;

  font-size: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: white;
  min-height: 3rem;
  &:hover {
    cursor: pointer;
  }
`;

export function Home() {
  return (
    <>
      <Title>Inter Tab Communication</Title>
      <Flex>
        <Box to="/postMessage">Post Message</Box>
        <Box to="/broadcastChannel">Broadcast Channel</Box>
        <Box to="/localStorage">Storage Event</Box>
      </Flex>
    </>
  );
}

import * as React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Grid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  grid-column: 1 / 3;
  text-align: center;
  @media (max-width: 768px) {
    grid-column: 1 / 1;
  }
`;

const Box = styled(Link)`
  background: rgba(255,255,255,.1);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgb(0 0 0 / 60%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Arial, sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  min-height: 100px;
  border: 3px outset #fff;
  box-shadow: rgba(150, 150, 193, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(110, 137, 164, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    cursor: pointer;
  }
`;

export function Home() {
  return (
    <Grid>
      <Title>Home</Title>
      <Box to="/postMessage">Post Message</Box>
      <Box to="/broadcastChannel">Broadcast Channel</Box>
      <Box to="/localStorage">Local Storage</Box>
    </Grid>
  );
}

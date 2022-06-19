import styled, { keyframes } from "styled-components";

export const AppearFromLeft = keyframes`
from{
    opacity:0;
   
}
to{
    opacity:1;
   
}`;

export const Container = styled.div`
  width: 396px;
  height: 342px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  flex: 1;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: "2px solid #000";
  animation: ${AppearFromLeft} 1s;

  header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-2);
    height: 50px;
    padding: 10px;

    h2 {
      color: var(--grey-1);
    }
  }
  form {
    background-color: var(--grey-3);
    padding: 5px 10px 15px 10px;
  }
  section {
    display: flex;
    gap: 10px;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

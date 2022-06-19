import styled, { keyframes } from "styled-components";

export const AppearFromRigth = keyframes`
from{
    opacity:0;
    transform: translateX(50px)
}
to{
    opacity:1;
    transform:translateX(0px)
}`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${AppearFromRigth} 1s;

  h1 {
    color: var(--color-primary);
    margin-bottom: 20px;
  }
`;
export const Form = styled.form`
  background-color: var(--grey-3);
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  width: 50vh;
  height: 70vh;
  padding: 20px;
`;

import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  section {
    display: flex;
    width: 50vh;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
    h1 {
      color: var(--color-primary);
    }
    button {
      width: 100px;
    }
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
  padding: 20px;
  h3 {
    margin-bottom: 10px;
  }
`;

export const Select = styled.select`
  margin-top: 10px;
  background: var(--grey-2);
  border-radius: 4px;
  border: 2px solid var(--grey-2);
  color: var(--grey-1);

  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;
  &:hover {
    border: 2px solid var(--grey-0);
  }
  &:focus {
    color: var(--grey-0);
  }
`;
export const LabelSelect = styled.div`
  text-align: left;
  width: 100%;
  font-size: 12px;
  gap: 10px;
  margin-top: 10px;
  display: flex;

  p {
    color: #e83f5b;
  }
`;

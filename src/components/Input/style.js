import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 100%;
  font-size: 12px;
  gap: 10px;
  div {
    margin-top: 10px;
    display: flex;
    p {
      color: #e83f5b;
    }
  }
`;

export const InputContainer = styled.div`
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

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--grey-1);
    &::placeholder {
      color: var(--grey-1);
    }
    &:focus {
      color: var(--grey-0);
    }
  }
`;

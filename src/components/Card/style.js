import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: var(--grey-4);
  margin-bottom: 16px;
  border-radius: 4px;
  padding: 18px;

  &:hover {
    background-color: var(--grey-2);
  }

  div span {
    margin-right: 25px;
  }
`;

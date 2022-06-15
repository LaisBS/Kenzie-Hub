import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.greySchema ? "#868E96" : "#FF577F")};
  color: ${(props) => (props.greySchema ? "#F8F9FA" : "#FFFFFF")};
  height: 45px;
  border-radius: 8px;
  border: none;
  font-family: "Inter";
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;
  &:hover {
    background-color: #ff427f;
  }
`;

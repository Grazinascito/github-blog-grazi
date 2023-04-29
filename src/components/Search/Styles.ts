import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 19.6rem auto 4.8rem;
  width: 86.4rem;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;
  }

  input {
    padding: 1.2rem 1.6rem;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme["blue-900"]};
  }
`;

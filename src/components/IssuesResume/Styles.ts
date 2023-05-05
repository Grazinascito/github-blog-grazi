import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3.2rem 4rem;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 10px;
  margin: -8.8rem auto;
  position: relative;
  z-index: 99;
  display: block;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    font-size: 1.4rem;
  }

  h2 {
    margin-bottom: 0.8rem;
  }
`;

export const BackButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${(props) => props.theme.blue};
  font-weight: bold;
`;

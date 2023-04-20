import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  width: 86.4rem;
  padding: 3.2rem 4rem;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 10px;
  margin: -8.8rem auto;
  position: relative;
  z-index: 99;
  header {
    display: flex;
    justify-content: space-between;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 2.4rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const GithubLink = styled.div`
  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    font-weight: bold;
  }
`;

export const WrapperAvatar = styled.div`
  img {
    width: 14.8rem;
    height: 14.8rem;
    border-radius: 8px;
  }
`;

export const WrapperContent = styled.div`
  h2 {
    margin-top: 0.8rem;
  }
  p {
    margin: 0.8rem 0 2.4rem;
    width: 61.2rem;
  }
`;

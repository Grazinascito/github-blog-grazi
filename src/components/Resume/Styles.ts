import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  padding: 3.2rem 4rem;
  background-color: ${(props) => props.theme["blue-700"]};
  border-radius: 10px;
  margin: -8.8rem auto;
  position: relative;
  z-index: 99;

  @media (max-width: 850px) {
    width: 36.4rem;
    height: 49.4rem;
    flex-direction: column;
    align-items: center;
  }
  header {
    display: flex;
    justify-content: space-between;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 2.4rem;

  @media (max-width: 850px) {
    flex-direction: column;
  }

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
  width: 61.2rem;
  @media (max-width: 900px) {
    width: 100%;
  }

  h2 {
    margin-top: 0.8rem;
  }
  p {
    margin: 0.8rem 0 2.4rem;
  }
`;

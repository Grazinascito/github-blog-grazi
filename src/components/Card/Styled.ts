import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.3rem;
  width: "100%";
  margin: 0 auto;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: 36.4rem;
  }
`;

export const CartWrapper = styled.div`
  padding: 3.4rem;
  height: 26rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme["blue-600"]};
  border-radius: 10px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.8rem;
  h2 {
    color: white;
    font-size: 2rem;
  }

  span {
    color: #7b96b2;
    font-size: 12px;
    text-align: center;
    width: 7rem;
  }

  p {
    color: ${(props) => props.theme["blue-200"]};
  }
`;

export const TextWrapper = styled.div`
  margin-top: 2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;
  line-height: 160%;
  height: 26rem;
`;

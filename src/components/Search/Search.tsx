import { Wrapper } from "./Styles";

export const Search = () => {
  return (
    <Wrapper>
      <div>
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </Wrapper>
  );
};

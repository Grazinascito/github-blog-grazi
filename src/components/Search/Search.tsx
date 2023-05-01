import { IssuesData } from "../../pages/Home/Home";
import { Wrapper } from "./Styles";

interface IssuesDataProps {
  issues: Array<IssuesData>;
  setValue: (e: string) => void;
  value: string;
}
export const Search = ({ issues, value, setValue }: IssuesDataProps) => {
  return (
    <Wrapper>
      <div>
        <h4>Publicações</h4>
        <span>{issues.length} publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </Wrapper>
  );
};

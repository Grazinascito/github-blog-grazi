import { CartWrapper, HeaderWrapper, TextWrapper, Wrapper } from "./Styled";
import { dateFormatter } from "../../utils/formatter";
import { IssuesData } from "../../pages/Home/Home";
import { useNavigate } from "react-router-dom";

interface IssuesDataProps {
  issues: Array<IssuesData>;
  onSearch: Function;
}

export const Card = ({ issues, onSearch }: IssuesDataProps) => {
  const navigate = useNavigate();
  const filteredIssues = onSearch();

  const TEXT_MAX_LENGTH = 181;
  const renderIssues = filteredIssues.length > 0 ? filteredIssues : issues;

  const textFormatter = (text: string) =>
    text.substring(0, TEXT_MAX_LENGTH).trim().concat("...");

  const redirectIssue = (number: number) => {
    return navigate(`post/${number}`);
  };

  return (
    <Wrapper>
      {renderIssues.map((issue: IssuesData) => {
        return (
          <CartWrapper
            key={issue.number}
            onClick={() => redirectIssue(issue.number)}
          >
            <HeaderWrapper>
              <h2>{issue.title}</h2>
              <span>{dateFormatter(issue.created_at)}</span>
            </HeaderWrapper>
            <TextWrapper>{textFormatter(issue.body)}</TextWrapper>
          </CartWrapper>
        );
      })}
    </Wrapper>
  );
};

import { CartWrapper, HeaderWrapper, TextWrapper, Wrapper } from "./Styled";
import { dateFormatter } from "../../utils/formatter";
import { IssuesData } from "../../pages/Home/Home";

interface IssuesDataProps {
  issues: Array<IssuesData>;
  onSearch: Function;
}

export const Card = ({ issues, onSearch }: IssuesDataProps) => {
  const TEXT_MAX_LENGTH = 181;

  const textFormatter = (text: string) =>
    text.substring(0, TEXT_MAX_LENGTH).trim().concat("...");

  const filteredIssues = onSearch();
  const renderIssues = filteredIssues.length > 0 ? filteredIssues : issues;

  return (
    <CartWrapper>
      {renderIssues.map((issue: IssuesData) => {
        return (
          <Wrapper>
            <HeaderWrapper>
              <h2>{issue.title}</h2>
              <span>{dateFormatter(issue.created_at)}</span>
            </HeaderWrapper>
            <TextWrapper>{textFormatter(issue.body)}</TextWrapper>
          </Wrapper>
        );
      })}
    </CartWrapper>
  );
};

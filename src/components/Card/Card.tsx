import { useEffect, useState } from "react";
import { IssuesApi } from "../../services/axios";
import { CartWrapper, HeaderWrapper, TextWrapper, Wrapper } from "./Styled";
import { dateFormatter } from "../../utils/formatter";

interface IssuesData {
  created_at: string;
  title: string;
  body: string;
}

export const Card = () => {
  const [issues, setIssues] = useState<IssuesData[]>([]);

  const fetchIssues = async () => {
    const response = await IssuesApi.get(
      "grazinascito/github-blog-grazi/issues"
    );

    const cardsData = response.data.map((data: IssuesData) => {
      return {
        title: data.title,
        created_at: data.created_at,
        body: data.body,
      };
    });
    console.log(cardsData, "fds");
    setIssues(cardsData);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  const TEXT_MAX_LENGTH = 181;

  const textFormatter = (text: string) =>
    text.substring(0, TEXT_MAX_LENGTH).trim().concat("...");

  return (
    <CartWrapper>
      {issues.map((issue) => {
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

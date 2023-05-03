import { Resume } from "../../components/Resume";
import { Search } from "../../components/Search/Search";
import { Card } from "../../components/Card/Card";
import { useEffect, useState } from "react";
import { IssuesApi } from "../../services/axios";
export interface IssuesData {
  created_at: string;
  title: string;
  body: string;
}

const styles = {
  maxWidth: "86.4rem",
  margin: "0 auto",
  padding: "1.2rem",
};

export const Home = () => {
  const [issuesData, setIssuesData] = useState<IssuesData[]>([]);
  const [value, setValue] = useState("");

  const onSearch = () => {
    const searchedIssues = issuesData.filter((issue) =>
      issue.title.toLowerCase().includes(value.toLowerCase())
    );
    return searchedIssues;
  };

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
    setIssuesData(cardsData);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div style={styles}>
      <Resume />
      <Search issues={issuesData} setValue={setValue} value={value} />
      <Card issues={issuesData} onSearch={onSearch} />
    </div>
  );
};

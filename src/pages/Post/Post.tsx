import { IssuesResume } from "../../components/IssuesResume/IssuesResume";
import { styles } from "../Home/Home";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IssuesApi } from "../../services/axios";
import ReactMarkdown from "react-markdown";

export interface IPost {
  url: string;
  title: string;
  user: string;
  created_at: string;
  body: string;
  comments: number;
}

export const Post = () => {
  const { postId } = useParams();

  const [postData, setPostData] = useState<IPost>();

  const issuesUrl = "grazinascito/github-blog-grazi/issues";

  const fetchIssue = async () => {
    const response = await IssuesApi.get(`${issuesUrl}/${postId}`);

    const data: IPost = {
      url: response.data.html_url,
      title: response.data.title,
      user: response.data.user.login,

      created_at: response.data.created_at,
      body: response.data.body,
      comments: response.data.comments,
    };

    setPostData(data);
  };

  useEffect(() => {
    fetchIssue();
  }, []);

  return (
    <div style={styles}>
      <IssuesResume postData={postData as IPost} />

      <section
        style={{ marginTop: "10rem", color: "#AFC2D4", padding: "5rem" }}
      >
        <ReactMarkdown children={postData?.body!} />
      </section>
    </div>
  );
};

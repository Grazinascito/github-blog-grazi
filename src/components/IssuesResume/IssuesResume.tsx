import github_icon from "../../assets/github_icon.svg";
import date_icon from "../../assets/date_icon.svg";
import comment_icon from "../../assets/comment_icon.svg";
import arrowleft_icon from "../../assets/arrowleft_icon.svg";
import link_icon from "../../assets/link_icon.svg";
import { GithubLink, Info } from "../Resume/Styles";
import { BackButton, Wrapper } from "./Styles";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../pages/Post/Post";
import { dateFormatter } from "../../utils/formatter";

interface issuesResumeProps {
  postData: IPost;
}

export const IssuesResume = ({ postData }: issuesResumeProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <header>
        <BackButton onClick={() => navigate(-1)}>
          <img src={arrowleft_icon} alt="" />
          VOLTAR
        </BackButton>
        <GithubLink>
          <a href={postData?.url}>
            VER NO GITHUB <img src={link_icon} alt="link icon" />
          </a>
        </GithubLink>
      </header>

      <div>
        <h2>{postData?.title}</h2>
        <Info>
          <div>
            <img src={github_icon} alt="github icon" />
            <span>{postData?.user}</span>
          </div>
          <div>
            <img src={date_icon} alt="local icon" />
            <span>{dateFormatter(postData?.created_at)}</span>
          </div>
          <div>
            <img src={comment_icon} alt="followers icon" />
            <span>{postData?.comments} comentários</span>
          </div>
        </Info>
      </div>
    </Wrapper>
  );
};

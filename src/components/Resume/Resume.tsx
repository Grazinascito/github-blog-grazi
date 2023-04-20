import {
  GithubLink,
  Info,
  Wrapper,
  WrapperAvatar,
  WrapperContent,
} from "./Styles";
import link_icon from "../../assets/link_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import local_icon from "../../assets/local_icon.svg";
import followers_icon from "../../assets/followers_icon.svg";
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export const Resume = () => {
  const { resumeData } = useContext(ResumeContext);

  const fallbackText =
    "Usuário muito preguiçoso para escrever uma descrição no github 😝";

  return (
    <Wrapper>
      <WrapperAvatar>
        <img src={resumeData?.avatar_url} alt="avatar icon" />
      </WrapperAvatar>
      <WrapperContent>
        <header>
          <h2>{resumeData?.name}</h2>
          <GithubLink>
            <a href={resumeData?.html_url}>
              GITHUB <img src={link_icon} alt="link icon" />
            </a>
          </GithubLink>
        </header>

        <p>{resumeData?.description || fallbackText}</p>

        <Info>
          <div>
            <img src={github_icon} alt="github icon" />
            <span>{resumeData?.login}</span>
          </div>
          <div>
            <img src={local_icon} alt="local icon" />
            <span>{resumeData?.company}</span>
          </div>
          <div>
            <img src={followers_icon} alt="followers icon" />
            <span>{resumeData?.followers} seguidores</span>
          </div>
        </Info>
      </WrapperContent>
    </Wrapper>
  );
};

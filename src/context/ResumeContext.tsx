import { createContext, useEffect, useState } from "react";

import { UserApi } from "../services/axios";

export const ResumeContext = createContext({} as any);
interface IresumeData {
  name: string;
  followers: number;
  login: string;
  company: string;
  avatar_url: string;
  description: string;
  html_url: string;
}
export const ResumeProvider = ({ children }: any) => {
  const [resumeData, setResumeData] = useState<IresumeData>();

  const fetchResume = async () => {
    try {
      const response = await UserApi.get("/grazinascito");
      const {
        name,
        followers,
        login,
        company,
        avatar_url,
        description,
        html_url,
      } = response.data;

      const userObj: IresumeData = {
        name,
        followers,
        login,
        company,
        avatar_url,
        description,
        html_url,
      };
      setResumeData(userObj);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchResume();
  }, []);

  return (
    <ResumeContext.Provider value={{ resumeData, fetchResume }}>
      {children}
    </ResumeContext.Provider>
  );
};

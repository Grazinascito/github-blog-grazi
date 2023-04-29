import axios from "axios";

export const UserApi = axios.create({
  baseURL: "https://api.github.com/users",
});

export const IssuesApi = axios.create({
  baseURL: "https://api.github.com/repos/"
})
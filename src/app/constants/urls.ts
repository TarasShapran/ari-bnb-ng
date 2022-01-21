import {environment} from "../../environments/environment";

let baseUrl = environment.API;

export const urls = {
  users:`${baseUrl}/users`,
  posts:`${baseUrl}/posts`,
  comments:`${baseUrl}/comments`,
}

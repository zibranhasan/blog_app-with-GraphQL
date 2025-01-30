import { authResolvers } from "./auth.js";
import { postResolvers } from "./post.js";

export const Mutation = {
  ...authResolvers,
  ...postResolvers,
};

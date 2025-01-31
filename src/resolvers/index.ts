import { Mutation } from "./Mutation/Mutation.js";
import { Post } from "./post.js";
import { Profile } from "./profile.js";
import { Query } from "./Query/Query.js";
import { User } from "./user.js";

export const resolvers = {
  Query,
  Post,
  User,
  Profile,
  Mutation,
};

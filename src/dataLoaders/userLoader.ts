import { User } from "@prisma/client";
import { prisma } from "../index.js";
import DataLoader from "dataloader";

const batchLoader = async (ids: number[]): Promise<User[]> => {
  //ids:[10,11,12,13]
  const users = await prisma.user.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  /**
   * {
   * 1:{id:1, name:fahim}
   * 2:{id:2, name:fahim}
   * 4:{id:4, name:fahim}
   * 10:{id:10, name:fahim}
   * 3:{id:3, name:fahim}
   * }
   */
  const userData: { [key: string]: User } = {};

  users.forEach((user) => {
    userData[user.id] = user;
  });

  return ids.map((id) => userData[id]);
};
//@ts-ignore
export const userLoader = new DataLoader<number, User>(batchLoader);

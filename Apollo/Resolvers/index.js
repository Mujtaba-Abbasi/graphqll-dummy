import TODOS from "../../Data/Todos/index.js";
import USERS from "../../Data/Users/index.js";

export const RESOLVER = {
  Todo: {
    user: (todo) => USERS.find((e) => e.id === todo.userId),
  },
  Query: {
    getTodos: () => TODOS,
    getUsers: () => USERS,
    getUser: (parent, { id }) => {
      const user = USERS.find((item) => item.id === Number(id));
      return user ? user : null;
    },
  },
};

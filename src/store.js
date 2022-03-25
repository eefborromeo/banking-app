import create from "zustand";
import { persist } from "zustand/middleware";

const initialUsers = [
  {
    id: 1,
    name: "spike",
    balance: 100,
    username: "user1",
    password: "user1",
    email: "user1@email.com",
    status: "APPROVED",
    expenseItems: [],
  },
  {
    id: 2,
    name: "mel",
    balance: 200,
    username: "user2",
    password: "user2",
    email: "user2@email.com",
    status: "APPROVED",
    expenseItems: [],
  },
];

const darkTheme = {
  name: "dark",
  sideBarBackground: "#222",
  textColor: "#fff",
  pageBackground: "#303030",
  boxBackground: "#80808073",
  topBar: "#000",
  sunBgColor: "#fff",
  sunColor: "#222",
  inputBackground: "#545454",
  thColor: "#fff",
};

const lightTheme = {
  name: "light",
  sideBarBackground: "#fff",
  textColor: "#222",
  pageBackground: "#ebeaf1",
  boxBackground: "#fff",
  topBar: "#596DC4",
  sunBgColor: "#222",
  sunColor: "#fff",
  thColor: "#596DC4",
};

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export const useStore = create(
  persist(
    (set) => ({
      currentTheme: themes["light"],
      adminLoggedIn: false,
      users: initialUsers,
      currentUser: false,
      transactionsLog: [],
      setTheme: (themeName) => set(() => ({ currentTheme: themes[themeName] })),
      addTransactionsLog: (transaction) =>
        set((state) => ({
          transactionsLog: [...state.transactionsLog, transaction],
        })),
      adminLogIn: () => set(() => ({ adminLoggedIn: true })),
      adminLogOut: () => set(() => ({ adminLoggedIn: false })),
      userLogIn: (id) => set(() => ({ currentUser: id })),
      userLogOut: () => set(() => ({ currentUser: false })),
      addUser: (newUser) =>
        set((state) => ({ users: [...state.users, newUser] })),
      setUsers: (newUsers) => set(() => ({ users: newUsers })),
    }),
    {
      name: "global-store",
    }
  )
);

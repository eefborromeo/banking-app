import create from "zustand";
import { persist } from "zustand/middleware";

const initialUsers = [
  {
    id: 1,
    name: "spike",
    balance: 100,
  },
  {
    id: 2,
    name: "mel",
    balance: 200,
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
  pageBackground: "#fff",
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

const useStore = create(
  persist(
    (set) => ({
      currentTheme: themes["light"],
      loggedIn: false,
      users: initialUsers,
      transactionsLog: [],
      setTheme: (themeName) => set(() => ({ currentTheme: themes[themeName] })),
      addTransactionsLog: (transaction) =>
        set((state) => ({
          transactionsLog: [...state.transactionsLog, transaction],
        })),
      logIn: () => set(() => ({ loggedIn: true })),
      logOut: () => set(() => ({ loggedIn: false })),
      addUser: (newUser) =>
        set((state) => ({ users: [...state.users, newUser] })),
    }),
    {
      name: "global-store",
    }
  )
);

export default useStore;

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

const useStore = create(
  persist(
    (set) => ({
      loggedIn: false,
      logIn: () => set(() => ({ loggedIn: true })),
      logOut: () => set(() => ({ loggedIn: false })),
      users: initialUsers,
      addUser: (newUser) =>
        set((state) => ({ users: [...state.users, newUser] })),
    }),
    {
      name: "global-store",
    }
  )
);

export default useStore;

import create from "zustand";

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

const useStore = create((set) => ({
  users: initialUsers,
  addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
}));

export default useStore;

import { create } from "zustand";

export const useName = create((set) => ({
  name: "ihor",
  age: 35,
  count: 0,
  inc: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  dec: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));

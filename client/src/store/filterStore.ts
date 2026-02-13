import { create } from "zustand";

interface FilterState {
  nameStartedWith: string;
  category: string;
  setNameStartedWith: (value: string) => void;
  setCategory: (value: string) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  nameStartedWith: "",
  category: "",
  setNameStartedWith: (value: string) => set({ nameStartedWith: value }),
  setCategory: (value: string) => set({ category: value }),
  clearFilters: () => set({ nameStartedWith: "", category: "" }),
}));

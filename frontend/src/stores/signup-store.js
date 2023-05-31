import { create } from "zustand";

const useSignupStore = create((set) => ({
  signupValues: {},
  addValues: (values) =>
    set((state) => ({
      signupValues: { ...values, ...state.signupValues },
    })),
}));

export default useSignupStore;

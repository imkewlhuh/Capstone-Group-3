import { create } from "zustand";

const useSignupStore = create((set) => ({
  signupValues: {},
  addValues: (values) =>
    set((state) => ({
      signupValues: { ...values, ...state.signupValues },
    })),
}));

export const useUserStore = create((set) => ({
  name: "",
  email: "",
  password: "",
  setName: (name) => set(() => ({name: name})),
  setEmail: (email) => set(() => ({email: email})),
  setPassword: (pass) => set(() => ({password: pass})),
}));

export const useBusinessStore = create((set) => ({
  type: "",
  name: "",
  location: "",
  setType: (type) => set(() => ({type: type})),
  setName: (name) => set(() => ({name: name})),
  setLocation: (location) => set(() => ({location: location}))
}))

export default useSignupStore;

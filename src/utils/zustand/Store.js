import { create } from 'zustand'
import { devtools, persist } from "zustand/middleware";

export const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        user: {
          token: null,
          isVerified: null,
          username: null
        },
        setToken: (response) =>
          set((state) => ({
            user: {
              ...state.user,
              token: response?.accessToken,
              isVerified: response?.isVerified,
              username: response?.username
            }
          })),
        removeToken: () =>
          set((state) => ({
            user: {
              ...state.user,
              token: null,
              isVerified: null,
              username: null
            }
          })),
      }),
      { name: "user" }
    )
  )
);




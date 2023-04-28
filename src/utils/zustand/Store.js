import { create } from 'zustand'
import { devtools, persist } from "zustand/middleware";

export const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        user: {
         phone: null
        },
        setToken: (response) =>
          set((state) => ({
            user: {
              ...state.user,
              phone: response.phone
            }
          })),
        removeToken: () =>
          set((state) => ({
            user: {
              ...state.user,
              phone: null
            }
          })),
      }),
      { name: "user" }
    )
  )
);




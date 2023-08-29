import { create } from "zustand"
import { useEffect } from "react"

interface useNavbarStoreStoreProps {
  isNavbarOpen: boolean
  toggleNavbar: () => void
}

export const useNavbarStore = create<useNavbarStoreStoreProps>((set) => ({
  isNavbarOpen: false,
  toggleNavbar: () => {
    set((state) => {
      const newIsNavbarOpen = !state.isNavbarOpen
      // Nastavit overflow na 'hidden', pokud je navbar otevřený.
      if (newIsNavbarOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }
      return { isNavbarOpen: newIsNavbarOpen }
    })
  },
}))

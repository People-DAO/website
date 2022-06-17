import { writable, get } from "svelte/store";
import { scrollElement, scrollTop } from 'svelte-scrolling'

export const mobileNavigationOpen = writable(false)

export const toggleMobileNavigation = () => {
  mobileNavigationOpen.set(!get(mobileNavigationOpen))
}

export const closeMobileNavigation = () => {
  mobileNavigationOpen.set(false)
}

export const scrollToRef = (ref: string) => {
  closeMobileNavigation()
  scrollElement(ref, { offset: -50 })
}

export const scrollToTop = () => {
  closeMobileNavigation()
  scrollTop()
}

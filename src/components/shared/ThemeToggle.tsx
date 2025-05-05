'use client'

import { setTheme } from '@/core/reducers/themeSlice'
import { RootState } from '@/core/store'
import { RiMoonFill, RiSunLine } from '@remixicon/react'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'

export function ThemeToggle() {
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme.theme)

  // Toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    Cookies.set('theme_preference', newTheme) // Store in cookie
    document.documentElement.setAttribute('data-theme', newTheme)
    dispatch(setTheme(newTheme)) // Dispatch to Redux store
  }

  // Don't render the button until the theme is set to prevent hydration issues
  if (theme === null) return null

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-box-light hover:bg-box-medium transition-all duration-500 focus:appearance-none focus:ring-0 ring-0 focus:border-0"
    >
      {theme === 'light' ? (
        <RiSunLine className="w-6 h-6 animate-theme-icon text-yellow-500" key="sun" />
      ) : (
        <RiMoonFill className="w-6 h-6 animate-theme-icon text-white" key="moon" />
      )}
    </button>
  )
}

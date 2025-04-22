'use client'
import { toggleDesktopSidebar } from '@/core/reducers/sidebarSlice'
import { RootState } from '@/core/store'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { SidebarMenuRenderer, MenuItem } from './SidebarMenuRenderer'
import Cookies from 'js-cookie'
import { iconMap, IconName } from './icons'

export interface SidebarProps {
  menu: MenuItem[]
}

export function Sidebar({ menu }: SidebarProps) {
  const isOpen = useSelector((state: RootState) => state.sidebar.isDesktopOpen)
  const dispatch = useDispatch()
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({})
  const theme = useSelector((state: RootState) => state.theme.theme)
  const logoSrc = theme === 'dark' ? '/logo.svg' : '/logo-dark.svg'

  function toggleSubmenu(itemName: string) {
    setOpenSubmenus((prev) => ({ ...prev, [itemName]: !prev[itemName] }))
  }

  function handleToggleSidebar() {
    setOpenSubmenus({})
    dispatch(toggleDesktopSidebar())
  }

  return (
    <div className="hidden lg:flex min-h-[100dvh] z-40 p-5">
      <div
        className={`hidden lg:flex flex-col bg-box-light dark:bg-box-light h-full font-poppins ${isOpen ? 'min-w-48' : 'min-w-16'} rounded-xl duration-500 text-box-light-text dark:text-box-light-text shadow-lg shadow-box-normal`}
      >
        <div className="pt-5 pb-3 flex items-center justify-center transition-all border-b border-box-normal dark:border-box-dark">
          {isOpen ? (
            <div className="flex flex-row w-full items-center justify-between pb-2 gap-1 px-3">
              <div className="flex flex-row gap-3 items-start max-w-28 overflow-hidden">
                <img src={logoSrc} alt="Logo" className="w-[110px] aspect-[3/1] object-contain" />
              </div>
              <button
                type="button"
                className="flex items-center justify-center p-[6px] rounded-lg bg-theme-brand-primary-normal hover:cursor-pointer"
                onClick={handleToggleSidebar}
              >
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75449 5.13807C7.01483 4.87772 7.01483 4.45561 6.75449 4.19526C6.49414 3.93491 6.07203 3.93491 5.81168 4.19526L2.47834 7.5286C2.21799 7.78894 2.21799 8.21106 2.47834 8.4714L5.81168 11.8047C6.07203 12.0651 6.49414 12.0651 6.75449 11.8047C7.01483 11.5444 7.01483 11.1223 6.75449 10.8619L3.89256 8L6.75449 5.13807Z"
                    fill="#F6F6F6"
                  />
                  <path
                    d="M12.0878 4.19526C11.8275 3.93491 11.4054 3.93491 11.145 4.19526C10.8847 4.45561 10.8847 4.87772 11.145 5.13807L14.0069 8L11.145 10.8619C10.8847 11.1223 10.8847 11.5444 11.145 11.8047C11.4054 12.0651 11.8275 12.0651 12.0878 11.8047L15.4212 8.4714C15.6815 8.21106 15.6815 7.78894 15.4212 7.5286L12.0878 4.19526Z"
                    fill="#F6F6F6"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="flex items-center justify-center p-[6px] rounded-lg bg-box-normal hover:cursor-pointer"
              onClick={handleToggleSidebar}
            >
              <svg
                width="27"
                height="26"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75449 5.13807C7.01483 4.87772 7.01483 4.45561 6.75449 4.19526C6.49414 3.93491 6.07203 3.93491 5.81168 4.19526L2.47834 7.5286C2.21799 7.78894 2.21799 8.21106 2.47834 8.4714L5.81168 11.8047C6.07203 12.0651 6.49414 12.0651 6.75449 11.8047C7.01483 11.5444 7.01483 11.1223 6.75449 10.8619L3.89256 8L6.75449 5.13807Z"
                  fill="#F6F6F6"
                />
                <path
                  d="M12.0878 4.19526C11.8275 3.93491 11.4054 3.93491 11.145 4.19526C10.8847 4.45561 10.8847 4.87772 11.145 5.13807L14.0069 8L11.145 10.8619C10.8847 11.1223 10.8847 11.5444 11.145 11.8047C11.4054 12.0651 11.8275 12.0651 12.0878 11.8047L15.4212 8.4714C15.6815 8.21106 15.6815 7.78894 15.4212 7.5286L12.0878 4.19526Z"
                  fill="#F6F6F6"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="mt-4 flex flex-grow flex-col gap-4 relative px-3">
          <SidebarMenuRenderer
            menu={menu}
            isOpen={isOpen}
            collapsed={!isOpen}
            openSubmenus={openSubmenus}
            toggleSubmenu={toggleSubmenu}
            handleToggleSidebar={handleToggleSidebar}
            context="desktop"
          />
        </div>
      </div>
    </div>
  )
}

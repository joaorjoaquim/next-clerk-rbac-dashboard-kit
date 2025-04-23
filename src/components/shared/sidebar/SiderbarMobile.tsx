'use client'
import { setMobileSidebar, toggleMobileSidebar } from '@/core/reducers/sidebarSlice'
import { RootState } from '@/core/store'
import * as Dialog from '@radix-ui/react-dialog'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MenuItem, SidebarMenuRenderer } from './SidebarMenuRenderer'

export interface SiderbarMobileProps {
  menu: MenuItem[]
}

export function SiderbarMobile({ menu }: SiderbarMobileProps) {
  const isOpen = useSelector((state: RootState) => state.sidebar.isMobileOpen)
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({})
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme.theme)
  const logoSrc = theme === 'dark' ? '/logo.svg' : '/logo-dark.svg'

  function toggleSubmenu(itemName: string) {
    setOpenSubmenus((prev) => ({ ...prev, [itemName]: !prev[itemName] }))
  }

  function handleCloseSidebar() {
    setOpenSubmenus({})
    dispatch(toggleMobileSidebar())
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={(state) => dispatch(setMobileSidebar(state))}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 z-40" />
        <Dialog.Content className="fixed top-0 left-0 h-screen w-[215px] z-50 bg-box-light shadow-xl p-4 flex flex-col font-poppins text-theme-gray-25">
          <Dialog.Title className="flex justify-between items-center mb-6">
            <img src={logoSrc} alt="Logo" className="w-[110px] aspect-[3/1] object-contain" />
            <Dialog.Close asChild>
              <button
                onClick={handleCloseSidebar}
                className="p-1 rounded bg-box-normal hover:opacity-75"
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
            </Dialog.Close>
          </Dialog.Title>

          <SidebarMenuRenderer
            menu={menu}
            isOpen={true}
            openSubmenus={openSubmenus}
            toggleSubmenu={toggleSubmenu}
            closeSidebar={handleCloseSidebar}
            context="mobile"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

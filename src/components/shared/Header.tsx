'use client'

import { setMobileSidebar } from '@/core/reducers/sidebarSlice'
import { useUser, useClerk } from '@clerk/nextjs'
import { usePathname, useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { ThemeToggle } from './ThemeToggle'
import { SidebarProps } from './sidebar/Siderbar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { RiSettings3Line, RiLogoutBoxLine } from '@remixicon/react'

export default function Header({ menu }: SidebarProps) {
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const dispatch = useDispatch()
  const currentRoute = usePathname()
  const router = useRouter()

  const linkPath =
    currentRoute.split('/').length > 2
      ? '/' + currentRoute.split('/')[1] + '/' + currentRoute.split('/')[2]
      : '/' + currentRoute.split('/')[1]

  const routeName = menu.find((item) => item.link === linkPath)

  return (
    <header className="flex flex-row w-full min-h-[70px] py-2 px-4 items-center justify-between text-box-light-text">
      <div className="flex items-center text-lg lg:text-2xl font-semibold gap-2 md:gap-4">
        <button
          type="button"
          className="flex items-center justify-center p-[6px] mr-1 lg:hidden rounded-lg bg-theme-gray-800 hover:cursor-pointer"
          onClick={() => dispatch(setMobileSidebar(true))}
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
        {routeName?.name}
      </div>

      <div className="flex flex-row w-fit gap-2 lg:gap-6 items-center">
        <ThemeToggle />

        {isLoaded && isSignedIn && (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="outline-none hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:ring-theme-brand-primary-normal rounded-full transition-all duration-300">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={user.imageUrl}
                  alt={user.fullName || 'Usuário'}
                />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content
              sideOffset={8}
              align="end"
              className="min-w-[160px] bg-box-light border border-box-normal rounded-xl p-1 shadow-lg z-50"
            >
              <DropdownMenu.Item
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-box-normal cursor-pointer transition-all duration-300"
                onClick={() => router.push('/settings')}
              >
                <div className="flex flex-col gap-2 items-start justify-start border-b border-box-light-text/50 pb-2">
                  <span className="font-medium">Olá, {user.firstName}</span>
                  <span className="font-light text-[12px] opacity-70">
                    {user.primaryEmailAddress?.emailAddress}
                  </span>
                </div>
              </DropdownMenu.Item>

              <DropdownMenu.Item
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-box-normal cursor-pointer transition-all duration-300"
                onClick={() => router.push('/settings')}
              >
                <RiSettings3Line size={18} />
                Configurações
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="flex items-center gap-2 px-3 py-2 rounded-md text-theme-error-normal hover:bg-theme-error-normal hover:text-white cursor-pointer transition-all duration-300"
                onClick={() => signOut()}
              >
                <RiLogoutBoxLine size={18} />
                Sair
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )}
      </div>
    </header>
  )
}

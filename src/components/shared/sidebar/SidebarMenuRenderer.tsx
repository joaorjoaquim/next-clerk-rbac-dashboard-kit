import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/react'
import { iconMap, IconName } from './icons'

export interface MenuItem {
  name: string
  icon: IconName
  link?: string
  margin?: boolean
  submenu?: { name: string; link: string; icon: IconName }[]
}

interface SidebarMenuRendererProps {
  menu: MenuItem[]
  isOpen: boolean
  openSubmenus: Record<string, boolean>
  toggleSubmenu: (name: string) => void
  closeSidebar?: () => void
  handleToggleSidebar?: () => void
  collapsed?: boolean
  context?: 'desktop' | 'mobile'
}

export function SidebarMenuRenderer({
  menu,
  isOpen,
  openSubmenus,
  toggleSubmenu,
  closeSidebar,
  handleToggleSidebar,
  collapsed = false,
  context = 'desktop',
}: SidebarMenuRendererProps) {
  const pathname = usePathname()
  const router = useRouter()
  const dispatch = useDispatch()
  const linkPath =
    pathname.split('/').length > 2
      ? '/' + pathname.split('/')[1] + '/' + pathname.split('/')[2]
      : '/' + pathname.split('/')[1]

  return (
    <nav className="flex flex-col gap-3">
      {menu.map((item) => {
        const Icon = iconMap[item.icon] || null
        const hasSubmenu = item.submenu && item.submenu.length > 0
        const isSubmenuActive = item.submenu?.some((subItem) => subItem.link === linkPath)
        const isActive = linkPath === item.link || isSubmenuActive

        return (
          <div key={item.name}>
            <button
              onClick={() => {
                if (hasSubmenu) {
                  if (!isOpen && context === 'desktop') {
                    if (handleToggleSidebar) handleToggleSidebar()
                    // defer submenu toggle until sidebar expands
                    toggleSubmenu(item.name)
                  } else {
                    toggleSubmenu(item.name)
                  }
                } else {
                  if (closeSidebar) closeSidebar()
                  if (item.link) router.push(item.link)
                }
              }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm ${
                isActive
                  ? 'bg-theme-brand-primary-normal text-white'
                  : 'hover:bg-theme-brand-primary-normal text-box-light-text'
              }`}
            >
              <div className="flex items-center gap-2">
                {Icon && <Icon size={20} />}
                {!collapsed && <span>{item.name}</span>}
              </div>
              {hasSubmenu &&
                !collapsed &&
                (openSubmenus[item.name] ? (
                  <RiArrowUpSLine size={16} />
                ) : (
                  <RiArrowDownSLine size={16} />
                ))}
            </button>

            {hasSubmenu && openSubmenus[item.name] && (
              <div className="ml-6 mt-1 flex flex-col gap-1">
                {item.submenu?.map((subItem) => {
                  const SubIcon = iconMap[subItem.icon] || null
                  const isSubActive = linkPath === subItem.link
                  return (
                    <Link
                      key={subItem.name}
                      href={subItem.link}
                      onClick={closeSidebar}
                      className={`flex items-center gap-2 text-sm px-2 py-1 rounded-md ${
                        isSubActive
                          ? 'bg-theme-brand-primary-light text-theme-brand-primary-darker'
                          : 'hover:bg-theme-brand-primary-normal text-box-light-text'
                      }`}
                    >
                      {SubIcon && <SubIcon size={16} />}
                      <span>{subItem.name}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}

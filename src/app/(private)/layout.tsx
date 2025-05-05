'use client'
import Header from '@/components/shared/Header'
import { Sidebar } from '@/components/shared/sidebar/Siderbar'
import { SiderbarMobile } from '@/components/shared/sidebar/SiderbarMobile'
import PrivateLayout from '@/core/PrivateLayout'
import { RootState } from '@/core/store'
import { useSelector } from 'react-redux'
import type { MenuItem } from '@/components/shared/sidebar/SidebarMenuRenderer'

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = useSelector((state: RootState) => state.theme.theme)

  const menu: MenuItem[] = [
    { name: 'Home', link: '/', icon: 'RiHomeLine' },
    { name: 'Wallet', link: '/wallet', icon: 'RiWallet3Line' },
    {
      name: 'API Keys',
      icon: 'RiKey2Line',
      submenu: [
        { name: 'My Keys', link: '/api-keys/my-keys', icon: 'RiKeyLine' },
        { name: 'Usage', link: '/api-keys/usage', icon: 'RiBarChartLine' },
      ],
    },
    {
      name: 'Design System',
      icon: 'RiLayoutGridLine',
      submenu: [
        { name: 'Components', link: '/design-system/components', icon: 'RiToggleLine' },
        { name: 'Charts', link: '/design-system/charts', icon: 'RiPieChartLine' },
      ],
    },
  ]

  return (
    <main className="flex flex-col h-[100dvh]">
      <PrivateLayout>
        <SiderbarMobile menu={menu} />
        <section className={`relative flex flex-row w-full flex-1 overflow-hidden`}>
          <header className="absolute top-0 left-0 w-[100dvw] h-[70px] bg-theme-brand-primary-normal -z-1"></header>
          <Sidebar menu={menu} />

          {/* Content section with scroll and proper height adjustment */}
          <div className="flex flex-col w-full flex-1 min-h-0">
            <Header menu={menu} />

            {/* Children (main content) */}
            <div className="flex-1 px-3 lg:pr-3 lg:pl-0 pb-6 overflow-y-auto">{children}</div>
          </div>
        </section>
      </PrivateLayout>
    </main>
  )
}

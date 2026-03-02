// components/ProductNav/ProductNav.tsx
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navigationItems = [
  {
    key: 'apm',
    href: '/application-performance-monitoring',
    label: 'APM',
    whitespaceNowrap: false,
  },
  {
    key: 'tracing',
    href: '/distributed-tracing',
    label: 'Distributed Tracing',
    whitespaceNowrap: true,
  },
  {
    key: 'logs',
    href: '/log-management',
    label: 'Log Management',
    whitespaceNowrap: true,
  },
  {
    key: 'metrics',
    href: '/metrics-and-dashboards',
    label: 'Metrics & Dashboards',
    whitespaceNowrap: true,
  },
  {
    key: 'exceptions',
    href: '/exceptions-monitoring',
    label: 'Exceptions',
    whitespaceNowrap: false,
  },
  {
    key: 'alerts',
    href: '/alerts-management',
    label: 'Alerts',
    whitespaceNowrap: false,
  },
]

export default function ProductNav() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    const activeItem = navigationItems.find((item) => pathname.startsWith(item.href))
    if (activeItem) {
      setActiveTab(activeItem.key)
    }
  }, [pathname])

  return (
    <div className="fixed left-0 right-0 top-[56px] z-10">
      <header className="mx-auto flex h-[56px] items-center overflow-x-auto overflow-y-hidden border-b border-signoz_slate-500 bg-signoz_ink-500/70 px-4 text-signoz_vanilla-400 !backdrop-blur-[20px] md:px-8 lg:px-8">
        <nav
          className="mx-auto flex w-full max-w-[1140px] items-end justify-between"
          aria-label="Product Navigation"
        >
          <div className="flex h-[56px] items-center gap-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`flex h-full items-center border-b-2 text-sm font-medium hover:text-signoz_robin-500 ${
                  item.whitespaceNowrap ? 'whitespace-nowrap' : ''
                } ${activeTab === item.key ? 'border-signoz_robin-500 text-signoz_vanilla-100' : 'border-transparent'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FolderOpen, Cog, Settings, FileText, Image } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { id: 'projects', label: 'Projects', icon: FolderOpen, href: '/projects' },
    { id: 'scripts', label: 'Scripts', icon: FileText, href: '/scripts' },
    { id: 'media', label: 'Media Library', icon: Image, href: '/media-library' },
    { id: 'billing', label: 'Billing', icon: Cog, href: '/billing' },
    { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
  ]

  const getActiveItem = () => {
    if (pathname === '/') return 'dashboard'
    if (pathname.startsWith('/projects')) return 'projects'
    if (pathname.startsWith('/scripts')) return 'scripts'
    if (pathname.startsWith('/media-library')) return 'media'
    if (pathname.startsWith('/billing')) return 'billing'
    if (pathname.startsWith('/settings')) return 'settings'
    return 'dashboard'
  }
  
  const activeItem = getActiveItem()

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-screen">
      {/* Logo Section */}
      <div className="p-6 border-b border-sidebar-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-sidebar-primary to-sidebar-primary/60 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-sidebar-primary-foreground font-bold text-lg">CF</span>
          </div>
          <div className="flex-1">
            <p className="text-sidebar-foreground font-bold text-base leading-tight">ClipFactory</p>
            <p className="text-sidebar-accent-foreground text-xs">AI Studio</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.id
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-sidebar-primary/20'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/40'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-sidebar-border/50 space-y-4">
        <div className="px-3 py-3 rounded-lg bg-sidebar-accent/20 hover:bg-sidebar-accent/30 transition-colors duration-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-sidebar-primary/60 to-sidebar-primary/30 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sidebar-accent-foreground text-xs font-bold">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sidebar-foreground text-sm font-medium truncate">John Doe</p>
              <p className="text-sidebar-accent-foreground text-xs truncate">john@clipfactory.ai</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

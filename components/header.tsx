"use client";

import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";

export default function Header() {
  const pathname = usePathname();

  const getBreadcrumb = () => {
    const breadcrumbs: { [key: string]: string } = {
      "/": "Dashboard",
      "/projects": "Projects",
      "/scripts": "Scripts",
      "/media-library": "Media Library",
      "/billing": "Billing",
      "/settings": "Settings",
    };
    return breadcrumbs[pathname] || "Dashboard";
  };

  const getCurrentTitle = () => {
    const titles: { [key: string]: string } = {
      "/": "Welcome to ClipFactory AI",
      "/projects": "Manage Your Projects",
      "/scripts": "Create and Manage Scripts",
      "/media-library": "Your Media Collection",
      "/billing": "Billing and Subscription",
      "/settings": "Account Settings",
    };
    return titles[pathname] || "Welcome to ClipFactory AI";
  };

  const getCurrentDescription = () => {
    const descriptions: { [key: string]: string } = {
      "/": "Monitor your video projects, manage credits, and track rendering progress",
      "/projects": "Create new projects and manage your video assets",
      "/scripts": "Write and manage scripts for your AI-generated videos",
      "/media-library": "Upload and organize images for your video projects",
      "/billing": "View your subscription plan and billing history",
      "/settings": "Customize your account preferences and security settings",
    };
    return descriptions[pathname] || "Welcome back to your dashboard";
  };

  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="px-6 lg:px-8 py-6 lg:py-8">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 mb-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mx-2 data-[orientation=vertical]:h-4"
            />
            <span className="text-muted-foreground text-sm">Workspace</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            <span className="text-foreground text-sm font-medium">
              {getBreadcrumb()}
            </span>
          </div>
          <AnimatedThemeToggler />
        </div>
        {/* Main Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance mb-3">
          {getCurrentTitle()}
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-sm lg:text-base">
          {getCurrentDescription()}
        </p>
      </div>
    </header>
  );
}

'use client'

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { mainSidebarItems } from "@/utils/constants/items"
import Link from "next/link"

export const MainSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {mainSidebarItems.map((mainSidebarItems) => (
            <SidebarMenuItem key={mainSidebarItems.title}>
              <SidebarMenuButton 
                tooltip={mainSidebarItems.title} 
                asChild 
                isActive={false}
                onClick={() => {}}>
                  <Link className="flex items-center gap-4" href={mainSidebarItems.url}>
                    <mainSidebarItems.icon />
                    <span className="text-sm">{mainSidebarItems.title}</span>
                  </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

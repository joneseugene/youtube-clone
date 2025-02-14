'use client'

import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { personalSidebarItems } from "@/utils/constants/items"
import Link from "next/link"

export const PersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {personalSidebarItems.map((personalSidebarItems) => (
            <SidebarMenuItem key={personalSidebarItems.title}>
              <SidebarMenuButton 
                tooltip={personalSidebarItems.title} 
                asChild 
                isActive={false}
                onClick={() => {}}>
                  <Link className="flex items-center gap-4" href={personalSidebarItems.url}>
                    <personalSidebarItems.icon />
                    <span className="text-sm">{personalSidebarItems.title}</span>
                  </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

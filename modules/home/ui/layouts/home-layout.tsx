import { SidebarProvider } from '@/components/ui/sidebar'
import { LayoutProps } from '@/utils/interface/LayoutProps'
import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import { HomeSidebar } from '../components/HomeSidebar'

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
        <div className='w-full'>
            <HomeNavbar />    
            <div className='flex min-h-screen pt-[4rem]'>
                <HomeSidebar />
                <main className='flex-1 overflow-y-auto'>
                    { children }
                </main>
            </div>
        </div>
    </SidebarProvider>
  )
}

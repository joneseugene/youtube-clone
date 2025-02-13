import { SidebarProvider } from '@/components/ui/sidebar'
import { LayoutProps } from '@/utils/interface/LayoutProps'
import React from 'react'
import HomeNavbar from '../components/HomeNavbar'

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
        <div className='w-full'>
            <HomeNavbar />    
            <div className='flex min-h-screen pt-[4rem]'>
                { children }
            </div>
        </div>
    </SidebarProvider>
  )
}

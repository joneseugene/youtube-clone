import { SidebarTrigger } from '@/components/ui/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SearchInput } from './searchInput'
import { AuthButton } from '@/modules/auth/ui/components/auth-button'

export const HomeNavbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50'>
        <div className='flex items-center gap-4 w-full'>
            {/*Logo and Menu*/}
            <div className='flex flex-shrink-0 items-center'>
                <SidebarTrigger />
                <Link href='/'>
                    <div className='flex p-4 gap-1 items-center'>
                        <Image src='/img/logo.png' alt='app logo' width={32} height={32}/>
                        <p className='text-xl font-semibold tracking-tight'>YouTube</p>
                    </div>
                </Link>
            </div>
            {/*Searhbar*/}
            <div className='flex flex-1 justify-center max-w-[720px] mx-auto' >
                <SearchInput />
            </div>
            <div className='flex-shrink-0 items-flex gap-4'>
                <AuthButton />
            </div>
        </div>
    </nav>
  )
}

export default HomeNavbar
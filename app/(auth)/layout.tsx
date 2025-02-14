import { LayoutProps } from '@/utils/interface/LayoutProps'
import React from 'react'

const Layout = ({children} : LayoutProps) => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
        { children }
    </div>
  )
}

export default Layout
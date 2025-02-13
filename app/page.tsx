import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Image src='/img/logo.png' alt='app logo' width={50} height={50}/>
        <p className='text-xl font-semibold tracking-tight'>YouTube</p>
    </div>
  )
}

export default Home
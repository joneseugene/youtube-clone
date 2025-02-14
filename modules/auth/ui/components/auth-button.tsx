'use client'
import { Button } from '@/components/ui/button'
import { UserCircleIcon } from 'lucide-react'
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'


export const AuthButton = () => {
  return (
    <>
      {/*Render this view if signed out*/}
      <SignedOut>
        <SignInButton>
          <Button className='px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/2 rounded-full shadow-none' variant='outline'>
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  )
}

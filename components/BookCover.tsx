import { variantStyles } from '@/constants'
import { cn } from '@/lib/utils'
import { BookCoverInterface } from '@/types'
import Image from 'next/image'
import React from 'react'

const BookCover = ({
    className,
    variant = 'regular',
    coverColor = '#012B48',
    cover
}: BookCoverInterface) => {
  return (
    <div 
      className={cn('relative transition-all duration-300', variantStyles[variant], className)} 
      style={{ backgroundColor: coverColor }}
    >
        {/* Book Cover Container */}
        <div className="relative w-[200px] h-[300px]">
            <Image 
                src={cover} 
                alt="Book cover" 
                className="rounded-sm object-cover" 
                fill 
            />
        </div>
    </div>
  )
}

export default BookCover

"use client"
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs' // Ensure correct import if using Clerk Auth
import React from 'react'

function Header() {
  const path = usePathname();

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-small'>
      <Image src='/logo.svg' width={160} height={100} alt='logo' />

      <ul className=' hidden md:flex gap-6 '>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path === '/dashboard' && 'text-primary font-bold'}`}
        >
          Dashboard
        </li>

        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path === '/dashboard/questions' && 'text-primary font-bold'}`}
        >
          Questions
        </li>

        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path === '/dashboard/upgrade' && 'text-primary font-bold'}`}
        >
          Upgrade
        </li>

        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path === '/dashboard/how' && 'text-primary font-bold'}`}
        >
          How it Works
        </li>
      </ul>

      <UserButton />
    </div>
  )
}

export default Header

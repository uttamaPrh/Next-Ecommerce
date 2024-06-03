"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <img src="./menu.png" alt='not Supported'
            width={28}
            height={28}
            onClick={() => setOpen((prev)=> !prev)}
        />{
            open && 
            <div className=''>
                <Link href="/">Home</Link>
                <Link href="/">Home</Link>
                <Link href="/">Home</Link>
                <Link href="/">Home</Link>
                <Link href="/">Home</Link>
                <Link href="/">Home</Link>
            </div>
        }

    </div>
  )
}

export default menu
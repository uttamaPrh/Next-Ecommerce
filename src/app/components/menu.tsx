"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
      <img
      className='cursor-pointer'
        src="./menu.png"
        width={28}
        height={28}
        alt="Browser Not Supported"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className='flex flex-col text-red-700'>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
          <Link href="/">Home</Link>
        </div>
      )}
    </div>
  );
}

export default menu
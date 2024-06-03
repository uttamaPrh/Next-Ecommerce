import React from 'react'
import Menu from './menu'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 '>
  {/* Mobile view  */}
 <Link href="/"> </Link>
    <Menu />
</div>
  )
}

export default navbar
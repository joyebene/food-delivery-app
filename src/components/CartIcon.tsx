<<<<<<< HEAD
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <Link href="/cart" className='flex items-center gap-4'>
        <div className='relative w-8 h-8 md:h-5'>
            <Image src="/cart.png" alt="" fill/>
        </div>
        <span>Cart (3)</span>
    </Link>
  )
}

=======
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <Link href="/cart" className='flex items-center gap-4'>
        <div className='relative w-8 h-8 md:h-5'>
            <Image src="/cart.png" alt="" fill/>
        </div>
        <span>Cart (3)</span>
    </Link>
  )
}

>>>>>>> f81e6151e4270a74601deff909f04fc13b74b58b
export default CartIcon;
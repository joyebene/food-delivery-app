<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      {/* BOX */}
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:w-full md:h-[90%] lg:w-[60%] xl:w-1/2'>
        {/* IMaGE CONTaINER */}
        <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
          <Image src="/loginBg.png" alt='img' fill className='object-cover'/>
        </div>

        {/* FORM CONTaINER */}
        <div className='p-10 flex flex-col gap-8 md:w-1/2'>
          <h1 className='font-bold text-xl xl:text-3xl '>Welcome</h1>
          <p className=''>Log into your account or create a new one using social buttons</p>
          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
            <Image src="/google.png" alt='' width={20} height={20} className='object-contain' />
            <span>Sign in with Google</span>
          </button>
          <button className='flex gap-4 p-4 ring-1 ring-blue-50 rounded-md'>
            <Image src="/facebook.png" alt='img' width={20} height={20} className='object-contain' />
            <span>Sign in with Facebook</span>
          </button>
          <p className='text-sm'>Have a problem?<Link href="/" className='underline'> Contact us </Link></p>
        </div>
      </div>
    </div>
  )
}

=======
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      {/* BOX */}
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:w-full md:h-[90%] lg:w-[60%] xl:w-1/2'>
        {/* IMaGE CONTaINER */}
        <div className='relative h-1/3 w-full md:h-full md:w-1/2'>
          <Image src="/loginBg.png" alt='img' fill className='object-cover'/>
        </div>

        {/* FORM CONTaINER */}
        <div className='p-10 flex flex-col gap-8 md:w-1/2'>
          <h1 className='font-bold text-xl xl:text-3xl '>Welcome</h1>
          <p className=''>Log into your account or create a new one using social buttons</p>
          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md'>
            <Image src="/google.png" alt='' width={20} height={20} className='object-contain' />
            <span>Sign in with Google</span>
          </button>
          <button className='flex gap-4 p-4 ring-1 ring-blue-50 rounded-md'>
            <Image src="/facebook.png" alt='img' width={20} height={20} className='object-contain' />
            <span>Sign in with Facebook</span>
          </button>
          <p className='text-sm'>Have a problem?<Link href="/" className='underline'> Contact us </Link></p>
        </div>
      </div>
    </div>
  )
}

>>>>>>> f81e6151e4270a74601deff909f04fc13b74b58b
export default LoginPage;
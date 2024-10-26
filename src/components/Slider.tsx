<<<<<<< HEAD
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const data = [
    {
        id: 1,
        title: "always fresh & always cripsy & always hot",
        image: "/slide1.png",
    },{
        id: 2,
        title: "we deliver your order wherever you are in NY",
        image: "/slide2.png",
    },{
        id: 3,
        title: "the best pizza to share with your family",
        image: "/slide3.jpg",
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(()=>{
    //     const interval = setInterval(
    //         ()=>setCurrentSlide((prev) => prev === data.length - 1 ? 0 : prev + 1
    //         ), 2000)
    //     return ()=> clearInterval(interval);
    // },[])
  return (
    <div className=' flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>

        {/* TEXT CONTaINER */}
        <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg:w-1/2'>
            <h1 className='text-4xl text-center uppercase p-4 md:p-10 lg:text-6xl xl:text-7xl'>
                {data[currentSlide].title}
            </h1>
            <button className='bg-red-500 text-white py-4 px-8'>Order Now</button>
        </div>

        {/* IMaGE CONTaINER */}
        <div className='w-full h-1/2 relative lg:h-full lg:w-1/2'>
            <Image src={data[currentSlide].image} alt='' fill className='object-cover' />
        </div>
    </div>
  )
}

=======
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const data = [
    {
        id: 1,
        title: "always fresh & always cripsy & always hot",
        image: "/slide1.png",
    },{
        id: 2,
        title: "we deliver your order wherever you are in NY",
        image: "/slide2.png",
    },{
        id: 3,
        title: "the best pizza to share with your family",
        image: "/slide3.jpg",
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(()=>{
    //     const interval = setInterval(
    //         ()=>setCurrentSlide((prev) => prev === data.length - 1 ? 0 : prev + 1
    //         ), 2000)
    //     return ()=> clearInterval(interval);
    // },[])
  return (
    <div className=' flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>

        {/* TEXT CONTaINER */}
        <div className='h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg:w-1/2'>
            <h1 className='text-4xl text-center uppercase p-4 md:p-10 lg:text-6xl xl:text-7xl'>
                {data[currentSlide].title}
            </h1>
            <button className='bg-red-500 text-white py-4 px-8'>Order Now</button>
        </div>

        {/* IMaGE CONTaINER */}
        <div className='w-full h-1/2 relative lg:h-full lg:w-1/2'>
            <Image src={data[currentSlide].image} alt='' fill className='object-cover' />
        </div>
    </div>
  )
}

>>>>>>> f81e6151e4270a74601deff909f04fc13b74b58b
export default Slider;
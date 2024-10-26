<<<<<<< HEAD
'use client';
import React from 'react';
import Countdown from 'react-countdown';


const endingDate = new Date("2024-10-13");

const CountDown = () => {
  return (
    <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
  )
}

=======
'use client';
import React from 'react';
import Countdown from 'react-countdown';


const endingDate = new Date("2024-10-13");

const CountDown = () => {
  return (
    <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
  )
}

>>>>>>> f81e6151e4270a74601deff909f04fc13b74b58b
export default CountDown;
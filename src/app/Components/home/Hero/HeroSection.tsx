import React from 'react'
import Carousel from '@/app/Components/Carousel'
import Image from 'next/image'
import MouseAnimate from './MouseAnimate'

const HeroSection = () => {
  return (
    <div className='relative h-screen w-full'>
      <Carousel />
      <div className='absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center'>
        <Image
          src={'/assets/acc/title-cover.svg'}
          height={500}
          width={500}
          alt='..'
          priority={false}
          className='h-3/4 w-3/4 object-cover opacity-50'
        />
      </div>
      <div className='absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center'>
        <Image
          src={'/brand/ASPA-white.svg'}
          height={500}
          width={500}
          alt='ASPA Logo'
          priority={false}
          className='h-full w-3/4 object-cover xl:w-full'
        />
        <h1 className='whitespace-nowrap text-xl text-white'>Asian Surf Performance Academy</h1>
      </div>
      <div className='absolute bottom-12 left-0 z-10 flex w-full items-center justify-center'>
        <MouseAnimate />
      </div>
    </div>
  )
}

export default HeroSection

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {Home} from '@/app/lib/Home'

const OurProgram = () => {
  return (
    <>
      <div className='our-program border-buttom relative mx-auto flex w-fit items-center justify-center py-8'>
        <div className='relative h-full w-full md:w-[95%] xl:w-[1024px]'>
          <Image
            src={'/assets/hero-img-1.png'}
            width={1500}
            height={1500}
            priority={false}
            alt='ASPA Logo'
            className='hidden h-[440px] w-full object-cover md:inline-block'
          />
          <div className='program-card relative z-10 space-y-4 bg-primary p-8 text-white md:absolute md:left-[2%] md:top-1/2 md:w-[450px] md:-translate-y-1/2'>
            <div className='absolute bottom-0 right-0 -z-10'>
              <Image
                src={'/assets/acc/title-cover-simple.svg'}
                alt='acc-line'
                width={500}
                height={500}
                className='h-[300px] w-[300px] opacity-40'
              />
            </div>
            <div className='header'>
              <h1 className='text-base font-bold uppercase xl:text-xl'>{[Home[1].title]}</h1>
            </div>
            <p className='w-full text-justify text-sm font-light'>{Home[1].description}</p>
            <div className='flex w-full flex-shrink-0 items-center gap-4'>
              <Link
                href={'/'}
                className='w-fit bg-white px-5 py-3 text-sm font-semibold text-black'
              >
                {Home[1].url}
              </Link>
              <Link href={'/program'} className='w-fit text-sm underline underline-offset-4'>
                {Home[1].url2}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurProgram

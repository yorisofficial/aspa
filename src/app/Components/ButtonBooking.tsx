'use client'
import React from 'react'
import Button from './Button'
import {usePathname} from 'next/navigation'

const ButtonBooking = ({title, variant}: {title: string; variant: boolean}) => {
  const pathName = usePathname()

  return (
    <>
      {variant ? (
        <Button label='Book now' variant='invert' className=''>
          {title}
        </Button>
      ) : (
        <Button label='Book now' variant='primary' className=''>
          {title}
        </Button>
      )}
    </>
  )
}

export default ButtonBooking

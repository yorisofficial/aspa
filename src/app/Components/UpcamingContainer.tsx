'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import Button from './Button'
import {Info} from '@phosphor-icons/react'

const UpcamingContainer = ({
  children,
  content,
  title,
}: {
  children: React.ReactNode
  content: boolean
  title?: string
}) => {
  const [isContent, setContent] = useState(content)

  return (
    <>
      {isContent && (
        <div className='h-screen w-full px-4 md:px-10 xl:px-0 bg-white'>
          <div className='w-full flex-col h-full gap-8 flex justify-center items-center'>
            <div className='text-center flex justify-center items-center flex-col'>
              <div className='mb-8 p-4 rounded-md w-fit h-fit bg-black text-white'>
                <Info size={52} />
              </div>
              <h1 className='text-3xl font-black'>Content coming soon</h1>
              <p className='text-base text-gray-500 w-3/4'>
                Unfortunately, this menu is currently not available. Please try again later.
              </p>
            </div>
            <Link href={'/'} className='animate-bounce'>
              <Button variant='primary' label='Back to main'>
                Back to main menu
              </Button>
            </Link>
          </div>
        </div>
      )}
      {!isContent && <div className='w-full h-full'>{children}</div>}
    </>
  )
}

export default UpcamingContainer

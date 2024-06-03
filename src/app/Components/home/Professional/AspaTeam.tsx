import React, {Suspense} from 'react'
import ListTeam from './ListTeam'
import Loading from '@/app/loading'

const ListAspaTeam = ({
  title,
  teamData,
  categories,
  total,
}: {
  title: string
  teamData: any
  categories: string
  total: number
}) => {
  return (
    <div>
      <div className='simple-container border-buttom flex flex-col items-start justify-start gap-8 py-8'>
        <h1 className='text-3xl font-black'>{title}</h1>
        {total > 0 ? (
          <span>
            Total {categories} :{' '}
            <span className='font-semibold'>
              {total} <span className='font-normal'>{categories.replace('ASPA', ' ')}</span>
            </span>
          </span>
        ) : (
          <span>Stay tuned</span>
        )}
        <Suspense fallback={<Loading />}>
          <ListTeam data={teamData} categories={categories} />
        </Suspense>
      </div>
    </div>
  )
}

export default ListAspaTeam

"use client"
import Loading from "@/app/loading"
import React, {Suspense, useState} from "react"
import ListTeam from "./ListTeam"
import Button from "../../Button"

interface Props {
  id: number
  full_name: string
  nickname: string
  title: string
  age: number
  experience: string
  level: string
  profile: string
  achievement: any
}

const AspaCoachTeam = ({
  title,
  teamData,
  categories,
}: {
  title: string
  teamData: Props[]
  categories: string
}) => {
  const [addNumber, setNumber] = useState(6)

  const data = teamData

  const valueData = addNumber
  const sliceData = data.slice(0, valueData)

  const handleClick = () => {
    if (valueData < data.length) {
      setNumber(valueData + 3)
    } else {
      setNumber(valueData)
    }
  }

  return (
    <div className="simple-container border-buttom flex flex-col items-start justify-start gap-8 py-8">
      <h1 className="text-3xl font-black">{title}</h1>
      <Suspense fallback={<Loading />}>
        <ListTeam data={sliceData} categories={categories} />
        {data.length > valueData && (
          <div className="w-full py-8 flex justify-center items-center">
            <Button variant="primary" label="add more team" className="" onClick={handleClick}>
              Load more
            </Button>
          </div>
        )}
      </Suspense>
    </div>
  )
}

export default AspaCoachTeam

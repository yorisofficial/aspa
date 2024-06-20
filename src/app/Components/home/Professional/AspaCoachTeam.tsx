"use client"
import Loading from "@/app/loading"
import React, {Suspense, useEffect, useState} from "react"
import ListTeam from "./ListTeam"
import Button from "../../Button"

const AspaCoachTeam = ({
  title,
  teamData,
  categories,
}: {
  title: string
  categories: string
  teamData: CoachProps[]
}) => {
  const [addNumber, setNumber] = useState(4)

  const valueData = addNumber
  const sliceData = teamData.slice(0, valueData)
  const number = 4

  const handleClick = () => {
    if (valueData < teamData.length) {
      setNumber(valueData + number)
      localStorage.setItem("addNumber", JSON.stringify(valueData + number))
    } else {
      setNumber(valueData)
      localStorage.setItem("addNumber", JSON.stringify(valueData))
    }
  }

  useEffect(() => {
    if (localStorage.getItem("addNumber")) {
      setNumber(JSON.parse(localStorage.getItem("addNumber")!))
    }
  }, [])

  return (
    <div className="simple-container border-buttom flex flex-col items-start justify-start gap-8 py-8">
      <h1 className="text-3xl font-black">{title}</h1>
      <Suspense fallback={<Loading />}>
        <ListTeam data={sliceData} categories={categories} />
        {teamData.length > valueData && (
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

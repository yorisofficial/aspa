import React from "react"
import ItemTeam from "./ItemTeam"

interface Props {
  id: number
  full_name: string
  nickname: string
  title: string
  location?: string
  profile: string
}

const ListTeam = ({data, categories}: {data: Props[]; categories: string}) => {
  return (
    <>
      <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 xl:grid-cols-3">
        {data.map((item) => (
          <ItemTeam key={item.id} data={item} categories={categories} />
        ))}
      </div>
    </>
  )
}

export default ListTeam

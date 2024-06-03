import React, {Suspense} from "react"
import ListTeam from "./ListTeam"
import Loading from "@/app/loading"

const ListAspaTeam = ({
  title,
  teamData,
  categories,
}: {
  title: string
  teamData: any
  categories: string
}) => {
  return (
    <div>
      <div className="simple-container border-buttom flex flex-col items-start justify-start gap-8 py-8">
        <h1 className="text-3xl font-black">{title}</h1>

        <Suspense fallback={<Loading />}>
          <ListTeam data={teamData} categories={categories} />
        </Suspense>
      </div>
    </div>
  )
}

export default ListAspaTeam

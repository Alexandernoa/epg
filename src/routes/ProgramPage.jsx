import React from "react"
import { useParams } from "react-router-dom"
import ProgramOverview from "../components/ProgramOverview"

export default function ProgramPage () {
  const { programId } = useParams()

  return (
    <>
      <ProgramOverview programId={programId} />
    </>
  )
}

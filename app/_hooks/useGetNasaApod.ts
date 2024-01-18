import { useEffect, useState } from "react"

import dayjs from "dayjs"
import { useAtomValue } from "jotai"

import { endDateAtom, startDateAtom } from "@/app/_atoms/atoms"
import { AstronomyPicture, UseGetNasaApodResult } from "@/app/_types"

const useGetNasaApod = (): UseGetNasaApodResult => {
  const [data, setData] = useState<AstronomyPicture[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const startDate = useAtomValue(startDateAtom)
  const endDate = useAtomValue(endDateAtom)
  const formattedStartDate = startDate ? dayjs(startDate).format("YYYY-MM-DD") : ""
  const formattedEndDate = endDate ? dayjs(endDate).format("YYYY-MM-DD") : ""
  const fetchData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=WrevvV24g59SsQVlUp9tTGLFKabR99r3PehOA3zx&start_date=${formattedStartDate}&end_date=${formattedEndDate}`,
      )

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const apodData: AstronomyPicture[] = await response.json()
      setData(apodData)
    } catch (err: any) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setError(null)
    if (endDate && startDate && dayjs(endDate).format("YYYY-MM-DD") < dayjs(startDate).format("YYYY-MM-DD")) {
      setError(new Error("End date cannot be less than the start date."))

      return
    }
    fetchData()
  }, [startDate, endDate])

  return { data, isLoading, error, setError }
}

export default useGetNasaApod

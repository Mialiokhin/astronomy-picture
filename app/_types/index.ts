import React from "react"

export interface AstronomyPicture {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

export interface UseGetNasaApodResult {
  data: AstronomyPicture[] | null
  isLoading: boolean
  error: Error | null
  setError: React.Dispatch<React.SetStateAction<Error | null>>
}

"use client"

import React from "react"

import { Box, Container } from "@mui/material"
import Skeleton from "@mui/material/Skeleton"

import AstronomyPictureCard from "@/app/_components/AstronomyPictureCard"
import ErrorComponent from "@/app/_components/ErrorComponent"
import useGetNasaApod from "@/app/_hooks/useGetNasaApod"

export default function Home() {
  const { data: apod, isLoading, error } = useGetNasaApod()

  if (error) {
    return <ErrorComponent error={error} />
  }

  return (
    <Container>
      {isLoading ? (
        <Skeleton variant="rectangular" animation="wave" width="100%" height={400} />
      ) : (
        <Box>{apod && apod.map((item) => <AstronomyPictureCard data={item} key={item.title} />)}</Box>
      )}
    </Container>
  )
}

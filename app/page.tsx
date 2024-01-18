"use client"

import React, { useEffect, useState } from "react"

import { Box, Button, Container } from "@mui/material"
import Skeleton from "@mui/material/Skeleton"

import AstronomyPictureCard from "@/app/_components/AstronomyPictureCard"
import ErrorComponent from "@/app/_components/ErrorComponent"
import { BtnCloseContainer } from "@/app/_components/FiltersBar/FiltersBar.styles"
import useGetNasaApod from "@/app/_hooks/useGetNasaApod"
import { AstronomyPicture } from "@/app/_types"

export default function Home() {
  const { data: apod, isLoading, error } = useGetNasaApod()
  const [visibleItems, setVisibleItems] = useState<AstronomyPicture[]>([])
  const [lastIndex, setLastIndex] = useState(0)

  useEffect(() => {
    if (apod && apod.length) {
      setVisibleItems(apod.slice(0, 5))
      setLastIndex(5)
    }
  }, [apod])

  const loadMore = () => {
    if (apod && lastIndex < apod.length) {
      setVisibleItems(visibleItems.concat(apod.slice(lastIndex, lastIndex + 5)))
      setLastIndex(lastIndex + 5)
    }
  }

  const handleScroll = () => {
    const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100

    if (bottom) {
      loadMore()
    }
  }

  const handleScrollToTop = () => {
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      window.scrollTo(0, 0)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  if (error) {
    return <ErrorComponent error={error} />
  }

  return (
    <Container style={{ height: "100%", overflow: "auto" }}>
      {isLoading ? (
        <Skeleton variant="rectangular" animation="wave" width="100%" height={400} />
      ) : (
        <Box>
          {visibleItems.map((item) => (
            <AstronomyPictureCard data={item} key={item.title} />
          ))}
        </Box>
      )}
      {visibleItems.length > 2 && (
        <BtnCloseContainer>
          <Button variant="contained" size="large" onClick={handleScrollToTop} sx={{ width: "100%", height: "50px" }}>
            SCROLL TO TOP
          </Button>
        </BtnCloseContainer>
      )}
    </Container>
  )
}

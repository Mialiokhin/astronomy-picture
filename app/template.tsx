"use client"

import React from "react"

import { Container } from "@mui/material"

import FiltersBar from "@/app/_components/FiltersBar/FiltersBar"
import useGetNasaApod from "@/app/_hooks/useGetNasaApod"

export default function Template({ children }: { children: React.ReactNode }) {
  const { isLoading } = useGetNasaApod()

  return (
    <div>
      <Container>
        <FiltersBar loading={isLoading || false} />
      </Container>
      {children}
    </div>
  )
}

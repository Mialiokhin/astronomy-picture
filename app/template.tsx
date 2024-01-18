"use client"

import React from "react"

import { Container } from "@mui/material"

import ContactBlock from "@/app/_components/ContactBlock/ContactBlock"
import FiltersBar from "@/app/_components/FiltersBar/FiltersBar"
import useGetNasaApod from "@/app/_hooks/useGetNasaApod"

const contacts = [
  { type: "telegram", value: "melleshka" },
  { type: "github", value: "Mialiokhin" },
  { type: "email", value: "a.mialiokhin@gmail.com" },
  { type: "phone", value: "+375297177209" },
]

export default function Template({ children }: { children: React.ReactNode }) {
  const { isLoading } = useGetNasaApod()

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ContactBlock contacts={contacts} />
      <Container>
        <FiltersBar loading={isLoading || false} />
      </Container>
      {children}
    </div>
  )
}

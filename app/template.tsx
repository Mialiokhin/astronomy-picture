"use client"

import React from "react"

import ButtonAppBar from "@/app/_components/ButtonAppBar"
import ContactBlock from "@/app/_components/ContactBlock/ContactBlock"
import MenuDraver from "@/app/_components/MenuDraver"

const contacts = [
  { type: "telegram", value: "melleshka" },
  { type: "github", value: "Mialiokhin" },
  { type: "email", value: "a.mialiokhin@gmail.com" },
  { type: "phone", value: "+375297177209" },
]

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ButtonAppBar />

      <ContactBlock contacts={contacts} />
      {children}
      <MenuDraver />
    </div>
  )
}

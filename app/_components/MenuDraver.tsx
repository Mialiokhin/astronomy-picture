import React from "react"
import Drawer from "react-modern-drawer"

import { Container } from "@mui/material"
import { useAtom } from "jotai/index"

import "./MenuDraver.css"
import { menuAtom } from "@/app/_atoms/atoms"
import FiltersBar from "@/app/_components/FiltersBar/FiltersBar"
import useGetNasaApod from "@/app/_hooks/useGetNasaApod"

const MenuDraver = () => {
  const { isLoading } = useGetNasaApod()

  const [isOpenMenu, setIsOpenMenu] = useAtom(menuAtom)

  const toggleDrawer = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <>
      <Drawer open={isOpenMenu} onClose={toggleDrawer} direction="top" className="draver" customIdSuffix="menuDrawer">
        <Container>
          <FiltersBar loading={isLoading || false} />
        </Container>
      </Drawer>
    </>
  )
}

export default MenuDraver

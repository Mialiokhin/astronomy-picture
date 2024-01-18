import * as React from "react"

import MenuIcon from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { useAtom } from "jotai"

import { menuAtom } from "@/app/_atoms/atoms"

export default function ButtonAppBar() {
  const [isOpenMenu, setIsOpenMenu] = useAtom(menuAtom)
  const handleMenuClick = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleMenuClick()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Astronomy Picture of the Day
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

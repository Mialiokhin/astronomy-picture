import React from "react"

import { Box, Typography } from "@mui/material"

const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", background: "black", color: "white", fontWeight: 800 }}>
      <Typography variant="h3" component="h1">
        Astronomy Picture of the Day
      </Typography>
    </Box>
  )
}

export default Header

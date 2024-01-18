"use client"

import { createTheme } from "@mui/material/styles"
import { Montserrat } from "next/font/google"

export const breakpointsAsInts = [768, 1024, 1200]

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 400,
    },
  },
  components: {},
})

export default theme

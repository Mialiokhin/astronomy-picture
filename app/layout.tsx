import { ThemeProvider } from "@mui/material/styles"
import type { Metadata } from "next"

import Header from "@/app/_components/Header"
import theme from "@/app/_components/theme"

export const metadata: Metadata = {
  title: "Astronomy Picture of the Day",
  description: "Astronomy Picture of the Day",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

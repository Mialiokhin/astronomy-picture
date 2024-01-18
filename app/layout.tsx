import { ThemeProvider } from "@mui/material/styles"
import type { Metadata } from "next"

import theme from "@/app/_components/theme"

export const metadata: Metadata = {
  title: "Astronomy Picture of the Day",
  description: "Astronomy Picture of the Day",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  )
}

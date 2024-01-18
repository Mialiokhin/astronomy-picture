import React from "react"

import { Container, Typography } from "@mui/material"

interface ErrorComponentProps {
  error: Error | null
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => (
  <Container>
    <Typography variant="h5" component="h2" sx={{ color: "red" }}>
      Error: {error?.message || (error ? String(error) : "Unknown error")}
    </Typography>
  </Container>
)

export default ErrorComponent

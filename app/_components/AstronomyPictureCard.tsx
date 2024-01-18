import React from "react"

import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { styled } from "@mui/system"

import { AstronomyPicture } from "@/app/_types"

const CardBox = styled("div")`
  margin: 20px 0;
`

const AstronomyPictureCard = ({ data }: { data: AstronomyPicture }) => {
  return (
    <CardBox>
      <Card>
        <CardMedia component="img" height="340" image={data.url} alt={data.title} />
        <CardContent>
          <Typography variant="h5" component="h2" sx={{ color: "green" }}>
            {data.date}
          </Typography>
          <Typography variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body1">{data.explanation}</Typography>
        </CardContent>
      </Card>
    </CardBox>
  )
}

export default AstronomyPictureCard

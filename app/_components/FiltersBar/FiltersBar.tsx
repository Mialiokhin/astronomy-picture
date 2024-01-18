import React, { useState } from "react"

import SendIcon from "@mui/icons-material/Send"
import LoadingButton from "@mui/lab/LoadingButton"
import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { useAtom } from "jotai"

import { endDateAtom, menuAtom, startDateAtom, today } from "@/app/_atoms/atoms"
import { BtnCloseContainer, DatePickerBox, RangeContainer } from "@/app/_components/FiltersBar/FiltersBar.styles"
import useDeviceDetect from "@/app/_hooks/useDeviceDetect"

const FiltersBar = ({ loading }: { loading: boolean }) => {
  const { isMobile } = useDeviceDetect()
  const [isOpenMenu, setIsOpenMenu] = useAtom(menuAtom)
  const [startDate, setStartDate] = useAtom(startDateAtom)
  const [endDate, setEndDate] = useAtom(endDateAtom)
  const [startDateValue, setStartDateValue] = useState(startDate)
  const [endDateValue, setEndDateValue] = useState(endDate)
  const [searchDate, setSearchDate] = useState(today)

  const handleSearchRange = () => {
    setStartDate(startDateValue)
    setEndDate(endDateValue)
    setIsOpenMenu(!isOpenMenu)
  }
  const handleSearchDay = () => {
    setStartDate(searchDate)
    setEndDate(searchDate)
    setIsOpenMenu(!isOpenMenu)
  }

  const toggleDrawer = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <Box>
      <RangeContainer>
        <Typography variant="h5" component="h2">
          Select the date
        </Typography>
        <DatePickerBox>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={searchDate} onChange={(newValue) => newValue && setSearchDate(newValue)} label="Date" />
          </LocalizationProvider>
          <LoadingButton
            variant="contained"
            loading={loading}
            size="large"
            onClick={handleSearchDay}
            endIcon={<SendIcon />}
            loadingPosition="end"
            sx={isMobile ? { width: "100%", height: "50px" } : { width: "150px", height: "50px" }}
          >
            <span>SHOW</span>
          </LoadingButton>
        </DatePickerBox>
      </RangeContainer>
      <RangeContainer>
        <Typography variant="h5" component="h2">
          Choose a range to see more
        </Typography>
        <DatePickerBox>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={startDate}
              onChange={(newValue) => newValue && setStartDateValue(newValue)}
              label="Start Date"
            />
            <DatePicker
              value={endDate}
              onChange={(newValue) => newValue && setEndDateValue(newValue)}
              label="End Date"
              maxDate={today}
            />
          </LocalizationProvider>
          <LoadingButton
            variant="contained"
            loading={loading}
            size="large"
            onClick={handleSearchRange}
            endIcon={<SendIcon />}
            loadingPosition="end"
            sx={isMobile ? { width: "100%", height: "50px" } : { width: "150px", height: "50px" }}
          >
            <span>SHOW</span>
          </LoadingButton>
        </DatePickerBox>
      </RangeContainer>
      <BtnCloseContainer>
        <Button variant="contained" size="large" onClick={toggleDrawer} sx={{ width: "100%", height: "50px" }}>
          CLOSE
        </Button>
      </BtnCloseContainer>
    </Box>
  )
}

export default FiltersBar

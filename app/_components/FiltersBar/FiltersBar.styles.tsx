import { styled } from "@mui/material"

export const RangeContainer = styled("div")`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  gap: 20px;
  @media (max-width: 768px) {
    flex-flow: column;
  }
`
export const DatePickerBox = styled("div")`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 20px;
  @media (max-width: 768px) {
    flex-flow: column;
  }
`

export const BtnCloseContainer = styled("div")`
  display: flex;
  justify-content: right;
  margin: 10px;
`

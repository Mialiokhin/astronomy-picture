import React from "react"

import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import PhoneIcon from "@mui/icons-material/Phone"
import TelegramIcon from "@mui/icons-material/Telegram"
import { Grid, Link } from "@mui/material"

interface Contact {
  type: string
  value: string
}

interface FooterContactBlockProps {
  contacts: Contact[]
}

const getContactLink = (type: string, value: string) => {
  switch (type) {
    case "telegram":
      return `https://t.me/${value}`
    case "github":
      return `https://github.com/${value}`
    case "email":
      return `mailto:${value}`
    case "phone":
      return `tel:${value}`
    default:
      return "#"
  }
}

const getContactIcon = (type: string) => {
  switch (type) {
    case "telegram":
      return <TelegramIcon />
    case "github":
      return <GitHubIcon />
    case "email":
      return <EmailIcon />
    case "phone":
      return <PhoneIcon />
    default:
      return null
  }
}

const ContactBlock: React.FC<FooterContactBlockProps> = ({ contacts }) => {
  return (
    <Grid container spacing={2} justifyContent="left" alignItems="center" margin="10px">
      {contacts.map((contact, index) => (
        <Grid item key={index}>
          <Link href={getContactLink(contact.type, contact.value)} color="inherit" underline="none">
            {getContactIcon(contact.type)}
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default ContactBlock

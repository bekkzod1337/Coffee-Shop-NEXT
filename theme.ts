// theme.ts
'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6F4E37', // Coffee brown
    },
    secondary: {
      main: '#FFC107', // Amber
    },
    background: {
      default: '#fff8f0', // Light cream
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
})

export default theme

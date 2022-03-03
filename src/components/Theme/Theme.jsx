import React from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Theme = ({children}) => {

  const theme={}

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Theme
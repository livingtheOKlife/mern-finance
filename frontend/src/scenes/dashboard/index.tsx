import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

type Props = {}

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`

const Dashboard = (props: Props) => {
  const { palette } = useTheme()
  const isAboveMediumScreens = useMediaQuery('(min-width: 1200px)')
  return (
    <Box width='100%' height='100%' display='grid' gap='1.5rem'
      sx={
        isAboveMediumScreens ? {
          gridTemplateColumns: 'repeat(3, minmax(370px, 1fr))',
          gridTemplateRows: 'repeat(10, minmax(60px, 1fr))',
          gridTemplateAreas:  gridTemplateLargeScreens,
        } : {
          gridAutoColumns: '1fr',
          gridAutoRows: '80px',
          gridTemplateAreas:  gridTemplateSmallScreens,
        }
      }
    >
      <Box gridArea='a' border='1px solid #fff'></Box>
      <Box gridArea='b' border='1px solid #fff'></Box>
      <Box gridArea='c' border='1px solid #fff'></Box>
      <Box gridArea='d' border='1px solid #fff'></Box>
      <Box gridArea='e' border='1px solid #fff'></Box>
      <Box gridArea='f' border='1px solid #fff'></Box>
      <Box gridArea='g' border='1px solid #fff'></Box>
      <Box gridArea='h' border='1px solid #fff'></Box>
      <Box gridArea='i' border='1px solid #fff'></Box>
      <Box gridArea='j' border='1px solid #fff'></Box>
    </Box>
  )
}

export default Dashboard
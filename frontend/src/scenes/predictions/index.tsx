import { Box, useTheme } from '@mui/material'
import React from 'react'

type Props = {}

const Predictions = (props: Props) => {
  const { palette } = useTheme()
  return (
    <Box>Predictions Page</Box>
  )
}

export default Predictions
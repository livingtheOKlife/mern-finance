import { Box, useTheme } from '@mui/material'
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  const { palette } = useTheme()
  return (
    <Box>Dashboard Page</Box>
  )
}

export default Dashboard
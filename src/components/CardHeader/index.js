import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const index = ({ title, subTitle, actionTitle, action }) => {
    return (
        <Stack justifyContent='space-between' flexDirection='row'>
            <Box>
                <Typography variant='h4'>
                    {title}
                </Typography>
                <Typography variant='caption' >
                    {subTitle}
                </Typography>
            </Box>
            <Typography variant='h4 as h5' sx={{ cursor: 'pointer', color: '#EB455F' }} onClick={action}>
                {actionTitle}
            </Typography>
        </Stack>
    )
}

export default index
import React from 'react'
import { Grid, Box } from '@mui/material';
import MainPanner from './MainPanner';
import Announcements from './Announcements';
import DueSection from './DueSection';

const index = () => {
  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item lg={12} md={12} xs={12} >
          <MainPanner />
        </Grid>
        <Grid item lg={9} md={12} xs={12} >
          <Announcements />
        </Grid>
        <Grid item lg={3} md={12} xs={12}  >
          <DueSection />
        </Grid>
      </Grid>
    </Box>
  )
}

export default index
import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper'
import MainBtn from '../../../components/Btns/MainBtn'
// import BooksSvg from '../../../assets/1488216538.svg'
import BooksSvg from '../../../assets/ur9w_1e5u_210811.jpg'



const MainPanner = () => {
    return (
        <PageTitleWrapper>
            <Grid container xl={12}
                direction="row"
                justifyContent="center"
                alignItems="stretch"
            >
                <Grid item xl={8} lg={8} sm={8} xs={12} md={8} p={2}
                >
                    <Typography variant="h2" component="h2" sx={{ color: '#EB455F', paddingBottom: 1 }} gutterBottom>
                        EXAMS TIME
                    </Typography>
                    <Typography variant="subtitle2">
                        Here we are, Are you ready to fight? Don't worry, we prepared some tips to<br />
                        be ready for you'r exams.
                    </Typography>
                    <Typography variant="subtitle2" pt={1} className='text-muted'>
                        "Nothing happens until somthing moves" - Albert Einstein
                    </Typography>
                    <Box pt={3}>
                        <MainBtn Content={'View Exams Tips'} />
                    </Box>
                </Grid>
                {/* ---- */}
                <Grid item xl={4} xs={3} md={4} lg={4}>
                    {/* <img alt='books' src={BooksSvg} style={{ width: '14rem' }} /> */}
                    <img alt='books' src={BooksSvg} style={{ width: '23rem' }} />

                </Grid>
                {/* --- */}

            </Grid>
        </PageTitleWrapper >
    )
}

export default MainPanner
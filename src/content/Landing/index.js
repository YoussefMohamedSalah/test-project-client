import { Box, Container, Card, styled, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import Hero from './Hero';

const LandingWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Landing() {
  return (
    <LandingWrapper>
      <Helmet>
        <title>Test Project</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Typography variant='h3' sx={{ color: 'Black', alignSelf: 'center' }}>
            Coligo
          </Typography>
        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          <Hero />
        </Card>
      </Container>
    </LandingWrapper>
  );
}

export default Landing;

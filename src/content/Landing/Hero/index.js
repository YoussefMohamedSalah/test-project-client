import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(45)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);


function Hero() {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const CheckUserLoggin = () => {
    if (userInfo) {
      navigate("/dashboard", { replace: true });
    } else if (!userInfo) {
      navigate("/login", { replace: true });
    }
  };

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={10} lg={8} mx="auto">
          <LabelWrapper color="success">Version 1.0.0</LabelWrapper>
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Home work & Assignments
            <br /> All In One Place
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            Sign Up by one click to start Managing Your School
            Assignments, send It to You'r Teachers As easy As A
            Finger Snap start Now To get One Year Free Of CHARGE!!
            <br />
            <span style={{ color: "yellowgreen" }}>
              Manage Smart With Coligo
            </span>
          </TypographyH2>
          <Button
            // component={RouterLink}
            // to="/dashboard/crypto"
            onClick={() => CheckUserLoggin()}
            size="large"
            variant="contained"
          >
            Login Now
          </Button>
          <Button
            sx={{ ml: 2 }}
            component="a"
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/youssef-salah-7aa783212/"
            size="large"
            variant="text"
          >
            Contact Developer
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;

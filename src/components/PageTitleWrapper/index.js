import PropTypes from 'prop-types';
import { Box, styled, Card } from '@mui/material';

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4)};
`
);

const PageTitleWrapper = ({ children }) => {
  return (
    <Card sx={{ borderRadius: 1 }}>
      <PageTitle>
        <Box>{children}</Box>
      </PageTitle>
    </Card>
  );
};

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTitleWrapper;

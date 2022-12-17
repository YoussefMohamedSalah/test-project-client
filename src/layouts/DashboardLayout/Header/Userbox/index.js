import { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Hidden,
  lighten,
  Popover,
  Typography,
  styled
} from '@mui/material';

import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../../redux/actions/authActions';
import { LOGOUT } from '../../../../redux/types/auth';


const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);

function HeaderUserbox() {
  // -----*-----*-----*-----*-----*-----*-----*-----*-----
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // -----*-----*-----*-----*-----*-----*-----*-----*-----
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // -----*-----*-----*-----*-----*-----*-----*-----*-----

  useEffect(() => {
    if (!userInfo) {
      navigate('/', { replace: true });
      dispatch({ type: LOGOUT });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, userInfo]);

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login');
  };

  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/3.jpg',
    jobtitle: 'Project Manager'
  };

  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar variant="rounded" alt={userInfo?.first_name} src={user.avatar} />
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body1">{userInfo?.first_name} {userInfo?.last_name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {userInfo?.user_type}
            </UserBoxDescription>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
        </Hidden>
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuUserBox sx={{ minWidth: 210 }} display="flex">
          <Avatar variant="rounded" alt={userInfo?.first_name} src={user.avatar} />
          <UserBoxText>
            <UserBoxLabel variant="body1">{userInfo?.first_name} {userInfo?.last_name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {userInfo?.user_type}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Box sx={{ m: 1 }}>
          <Button onClick={logoutHandler} color="primary" fullWidth>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            Sign out
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderUserbox;

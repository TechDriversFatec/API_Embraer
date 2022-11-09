import { AccountCircle } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const pages = ['Calculation', 'Add User'];
const settings = ['Profile', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

  };

  const handleCalculo = () => {
    setAnchorElNav(null);
    navigate('/Calculo')
  };
  const handleAddAircraft = () => {
    setAnchorElNav(null);
    navigate('/Criar')
  };
  const handleUser = () => {
    setAnchorElNav(null);
    navigate('/Users')
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const handleProfile = () => {
    setAnchorElNav(null);
    navigate('/Profile')
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const nomeUsuario = (nome: string) => {
    var primeiroNome = nome.split(" ")
    return primeiroNome[0]
  }

  if (window.location.pathname !== "/") {
    if (localStorage.getItem('nivelAcesso') === '1') {
      return (

        <AppBar style={{ background: '#1C1C1C', height: '50px' }} position="static">
          <Container style={{ padding: '0px', height: '50px' }} maxWidth="xl">
            <Toolbar style={{ padding: '0px', height: '50px', paddingBottom: '10px' }} disableGutters>
              <i style={{ marginRight: '5px', marginLeft: '5px' }}>
                <img src="loguinho.png" id="logoAviaozinho" alt="some text" />
              </i>
              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/Index"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                EMBRAER
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  key={'Calculo'}
                  onClick={handleCalculo}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {'Calculation'}
                </Button>
                <Button
                  key={'Usuarios'}
                  onClick={handleUser}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {'Users'}
                </Button>
              </Box>
              <Box>Welcome, {nomeUsuario(localStorage.getItem('nomeUsuario') ?? "User")}</Box>

              <Box sx={{ flexGrow: 0 }}>
                <MenuItem onClick={handleOpenUserMenu}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  {/* <p>Profile</p> */}
                </MenuItem>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key={'Profile'} onClick={handleProfile}>
                    <Typography textAlign="center">{'Profile'}</Typography>
                  </MenuItem>

                  <MenuItem key={'Logout'} onClick={handleLogout}>
                    <Typography textAlign="center">{'Logout'}</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
    } else {
      return (

        <AppBar style={{ background: '#1C1C1C', height: '50px' }} position="static">
          <Container style={{ padding: '0px', height: '50px' }} maxWidth="xl">
            <Toolbar style={{ padding: '0px', height: '50px', paddingBottom: '10px' }} disableGutters>
              <i style={{ marginRight: '5px', marginLeft: '5px' }}>
                <img src="loguinho.png" id="logoAviaozinho" alt="some text" />
              </i>
              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                EMBRAER
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <MenuItem key={'Calculation'} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{'Calculation'}</Typography>
                  </MenuItem>
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  key={'Calculo'}
                  onClick={handleCalculo}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {'Calculation'}
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <MenuItem onClick={handleOpenUserMenu}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  {/* <p>Profile</p> */}
                </MenuItem>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key={'Profile'} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{'Profile'}</Typography>
                  </MenuItem>

                  <MenuItem key={'Logout'} onClick={handleLogout}>
                    <Typography textAlign="center">{'Logout'}</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
    }
  } else {
    return (
      <></>
    )
  }
}
export default ResponsiveAppBar;
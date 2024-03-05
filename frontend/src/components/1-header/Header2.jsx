import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  Container,
  Dialog,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Close, ExpandMore, Person2Outlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { useTheme } from '@emotion/react';

const options = ['All Categories', 'Clothing', 'Electronics', 'Cars'];

const Search = styled('div')(({ theme }) => ({
  flexGrow: 0.4,
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid #777',
  transition: '.9s',
  '&:hover': {
    border: '1px solid #333',
    backgroundColor: '#b6b3b32a',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#777',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const [openDia, setOpenDia] = useState(false);

  const handleClickOpenDia = () => {
    setOpenDia(true);
  };

  const handleCloseDia = () => {
    setOpenDia(false);
  };

  return (
    <Container
      sx={{
        my: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Stack alignItems={'center'} flexDirection={'row'}>
        <Stack alignItems={'center'}>
          <ShoppingCartOutlinedIcon />
          <Typography variant="body2">E-commerce</Typography>
        </Stack>

        {/* for extra small screens */}
        <IconButton
          onClick={handleClickOpenDia}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <SearchIcon />
        </IconButton>

        <Dialog
          sx={{ '.MuiPaper-root': { minWidth: { xs: '100%', md: 800 }, display: 'flex', justifyContent: 'center', alignItems: 'center', py: 10 } }}
          open={openDia}
          onClose={handleCloseDia}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: 0,
              right: 10,
              ':hover': { rotate: '180deg', color: 'red', transition: '.2s' },
            }}
            onClick={handleCloseDia}
          >
            <Close />
          </IconButton>

          <Search
            sx={{
              borderRadius: '22px',

              width: "400px",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

        </Dialog>
      </Stack>

      <Search
        sx={{
          borderRadius: '22px',
          display: { xs: 'none', sm: 'flex' },
          width: { sm: '300px' },
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />

        <List
          component="nav"
          aria-label="Device settings"
          sx={{
            bgcolor: theme.palette.myColor.main,
            borderBottomRightRadius: 22,
            borderTopRightRadius: 22,
            p: 0,
          }}
        >
          <ListItem
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              secondary={options[selectedIndex]}
              sx={{
                width: 90,
                textAlign: 'center',
                '&:hover': { cursor: 'pointer' },
              }}
            />
            <ExpandMore sx={{ fontSize: '16px' }} />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
              sx={{ fontSize: '13px' }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Search>

      <Stack direction={'row'} alignItems={'center'}>
        <IconButton>
          <Person2Outlined />
        </IconButton>

        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header2;

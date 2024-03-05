import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  Close,
  ElectricBikeOutlined,
  ExpandMore,
  KeyboardArrowRightOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  MenuOutlined,
  SportsEsportsOutlined,
  Window,
} from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import Links from './Links';

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pb: 3
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.secondary,
            width: 222,
          }}
        >
          <Window />

          <Typography
            sx={{
              p: 0,
              textTransform: 'capitalize',
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            '.MuiPaper-root': {
              width: '222px',
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bike</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery('(min-width:1200px)') && (
        <Stack gap={4} direction={'row'} alignItems={'center'}>
          <Links title={'Home'} />
          <Links title={'Mega Menu'} />
          <Links title={'Full Screen Menu'} />
          <Links title={'Pages'} />
          <Links title={'User Account'} />
          <Links title={'Vendor Account'} />
        </Stack>
      )}

      {useMediaQuery('(max-width:1200px)') && (
        <IconButton onClick={toggleDrawer('top', true)}>
          <MenuOutlined />
        </IconButton>
      )}

      <Drawer
        anchor={'top'}
        open={state['top']}
        onClose={toggleDrawer('top', false)}
        sx={{
          '.MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper': {
            height: '100%',
          },
          '.MuiPaper-root.css-1qdun2q-MuiPaper-root-MuiDrawer-paper': {
            height: '100%',
          },
        }}
      >
        <Box
          sx={{
            width: 444,
            mx: 'auto',
            mt: 6,
            position: 'relative',
            pt: 10,
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              ':hover': { rotate: '180deg', color: 'red', transition: '.2s' },
            }}
            onClick={toggleDrawer('top', false)}
          >
            <Close />
          </IconButton>

          {[
            { mainLink: 'Home', subLink: ['Link1', 'Link2', 'Link3'] },
            { mainLink: 'Mega menu', subLink: ['Link1', 'Link2', 'Link3'] },
            {
              mainLink: 'Full screen menu',
              subLink: ['Link1', 'Link2', 'Link3'],
            },
            { mainLink: 'Pages', subLink: ['Link1', 'Link2', 'Link3'] },
            { mainLink: 'User account', subLink: ['Link1', 'Link2', 'Link3'] },
            {
              mainLink: 'Vendor account',
              subLink: ['Link1', 'Link2', 'Link3'],
            },
          ].map((item, i) => {
            return (
              <Accordion key={i} elevation={0} sx={{ bgcolor: 'initial' }}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>

                {item.subLink.map((link, j) => {
                  return (
                    <List key={j} sx={{ py: 0, my: 0 }}>
                      <ListItem sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  );
                })}
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;

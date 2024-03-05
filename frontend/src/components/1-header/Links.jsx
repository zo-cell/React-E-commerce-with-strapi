import {
  KeyboardArrowDownOutlined,
  KeyboardArrowRightOutlined,
} from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

// eslint-disable-next-line react/prop-types
const Links = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        ':hover .show-when-hover': { display: 'block' },
        ':hover': { cursor: 'pointer' },
      }}
    >


      <Typography variant="body1" sx={{ fontSize: 15 }}>
        {title}
      </Typography>
      <KeyboardArrowDownOutlined />


      <Box
        className="show-when-hover"
        sx={{
          position: 'absolute',
          top: '100%',
          transform: 'translateX(-50%)',
          left: '50%',
          display: 'none',
          zIndex: 2,
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav>
            <List sx={{ width: 200 }}>
              <ListItem disablePadding>
                <ListItemButton sx={{ py: 0 }}>
                  <ListItemText
                    sx={{ '.MuiTypography-root': { fontSize: 15 } }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem
                disablePadding
                sx={{
                  position: 'relative',
                  ':hover .products-sublink': { display: 'block' },
                }}
              >
                <ListItemButton sx={{ py: 0 }}>
                  <ListItemText
                    sx={{ '.MuiTypography-root': { fontSize: 15 } }}
                    primary="Products"
                  />

                  <KeyboardArrowRightOutlined />
                  {title === 'Vendor Account' ? (
                    <Box
                      className="products-sublink"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: '100%',
                        display: 'none',
                        mr: 1,
                      }}
                    >
                      <Paper>
                        <nav>
                          <List sx={{ minWidth: 200 }}>
                            <ListItem disablePadding>
                              <ListItemButton sx={{ py: 0 }}>
                                <ListItemText
                                  sx={{
                                    '.MuiTypography-root': { fontSize: 15 },
                                  }}
                                  primary="Product 1"
                                />
                              </ListItemButton>
                            </ListItem>

                            <ListItem
                              disablePadding
                              sx={{ position: 'relative' }}
                            >
                              <ListItemButton sx={{ py: 0 }}>
                                <ListItemText
                                  sx={{
                                    '.MuiTypography-root': { fontSize: 15 },
                                  }}
                                  primary="Product 2"
                                />
                              </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                              <ListItemButton sx={{ py: 0 }}>
                                <ListItemText
                                  sx={{
                                    '.MuiTypography-root': { fontSize: 15 },
                                  }}
                                  primary="Product 3"
                                />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </nav>
                      </Paper>
                    </Box>


                  ) : (


                    <Box
                      className="products-sublink"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: '100%',
                        display: 'none',
                        ml: 1,
                      }}
                    >
                      <Paper>
                        <nav>
                          <List sx={{ minWidth: 200 }}>
                            <ListItem disablePadding>
                              <ListItemButton sx={{ py: 0 }}>
                                <ListItemText
                                  sx={{
                                    '.MuiTypography-root': { fontSize: 15 },
                                  }}
                                  primary="Product 1"
                                />
                              </ListItemButton>
                            </ListItem>

                            <ListItem
                              disablePadding
                              sx={{ position: 'relative' }}
                            >
                              <ListItemButton sx={{ py: 0 }}>
                                <ListItemText
                                  sx={{
                                    '.MuiTypography-root': { fontSize: 15 },
                                  }}
                                  primary="Product 2"
                                />
                              </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                              <ListItemButton sx={{ py: 0 }}>
                                <ListItemText
                                  sx={{
                                    '.MuiTypography-root': { fontSize: 15 },
                                  }}
                                  primary="Product 3"
                                />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </nav>
                      </Paper>
                    </Box>
                  )}
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ py: 0 }}>
                  <ListItemText
                    sx={{ '.MuiTypography-root': { fontSize: 15 } }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ py: 0 }}>
                  <ListItemText
                    sx={{ '.MuiTypography-root': { fontSize: 15 } }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;

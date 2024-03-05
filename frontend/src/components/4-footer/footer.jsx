
import './footer.css';
import { Box, Button, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{
      bgcolor: "#2B3445",
      py: 1.3,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    }}>
      <Typography
        variant="h6"
        justifyContent={"center"}
        display={"flex"}
        alignItems={'center'}
        color={"HighlightText"}
        sx={{fontSize: 18}}
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant='text'
          color="primary"
        >
          Shady Samy
          </Button>
        ©2023
      </Typography>
    </Box>
  );
}

export default Footer;

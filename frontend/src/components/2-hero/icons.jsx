import './hero.css';
import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from '@mui/icons-material';
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';


const Icons = () => {
  const theme = useTheme()
  return (
    <Container sx={{ bgcolor: theme.palette.mode === "dark" ? '#000' : '#fff' }}>
      <Stack
        divider={
          useMediaQuery('(min-width: 600px)') ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        direction={'row'}
        spacing={0}
        flexWrap={'wrap'}
        sx={{ justifyContent: 'center', mt: 2 }}
      >
        <MyBox
          icon={<ElectricBolt sx={{ fontSize: 30 }} />}
          title={'Fast Delivery'}
          subtitle={'Start from 10$'}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined sx={{ fontSize: 30 }} />}
          title={'Money Guarantee'}
          subtitle={'7 Days Back'}
        />
        <MyBox
          icon={<AccessAlarmOutlined sx={{ fontSize: 30 }} />}
          title={'365 Days'}
          subtitle={'For free return '}
        />
        <MyBox
          icon={<CreditScoreOutlined sx={{ fontSize: 30 }} />}
          title={'Payment'}
          subtitle={'Secure system'}
        />
      </Stack>
    </Container>
  );
};

export default Icons;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, subtitle }) => {
  const theme = useTheme()
  return (
    <Box
      className="theBox"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        py: 1,
        px: 2,
        width: 200,
        justifyContent: useMediaQuery('(min-width: 600px)') ? 'center' : 'start',
        flexGrow: 1,
      }}
    >
      {icon}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="body1" >
          {title}
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

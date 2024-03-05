import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import './hero.css';
import { ArrowForward } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';
import Icons from './icons';

const mySlider = [
  { text: 'MEN', link: 'src/images/banner-15.jpg' },
  { text: 'WOMEN', link: 'src/images/banner-25.jpg' },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Container sx={{pt: 8}}>
      <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Swiper
          loop="true"
          spaceBetween={0}
          speed={1800}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{
            dynamicBullets: false,
            clickable: true,
          }}
          className="mySwiper"
        >
          {mySlider.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={item.link} alt="slider-image" />
                <Box
                  sx={{
                    [theme.breakpoints.up('sm')]: {
                      position: 'absolute',
                      left: '10%',
                    },
                    [theme.breakpoints.down('sm')]: { py: 2 },
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#222' }}>
                    LIFE STYLE COLLECTION
                  </Typography>
                  <Typography
                    sx={{ color: '#222', fontWeight: 400, my: 1 }}
                    variant="h3"
                  >
                    {item.text}
                  </Typography>

                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    sx={{ justifyContent: 'center' }}
                  >
                    <Typography
                      color={'#333'}
                      mr={1}
                      variant="h4"
                      fontSize={'20px'}
                    >
                      SALE UP TO
                    </Typography>
                    <Typography
                      color={'#D23F57'}
                      variant="h4"
                      fontSize={'20px'}
                    >
                      30% OFF
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{ color: '#000', fontWeight: 300, my: 1 }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: '#222',
                      boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
                      color: '#fff',
                      borderRadius: '1px',
                      '&:hover': {
                        bgcolor: '#151515',
                        boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
                      },
                    }}
                    variant="contained"
                  >
                    shop now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: 'none', md: 'block' }, minWidth: '26.7%' }}>
          <Box sx={{ position: 'relative', width: '100%' }}>
            <img src="src\images\banner-17.jpg" alt="image2" width="100%" />
            <Stack
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: '#2B3445',
                  fontSize: '18px',
                }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#2B3445',
                  lineHeight: '16px',
                  mt: 1,
                }}
              >
                Summer
              </Typography>
              <Typography variant="h6" sx={{ color: '#2B3445' }}>
                SALE 28% OFF
              </Typography>

              <Link
                sx={{
                  color: '#2B3445',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: '.2s',

                  '&:hover': {
                    color: '#D23F57',
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: '13px' }} />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ position: 'relative' }}>
            <img
              src="src\images\banner-16.jpg"
              alt="image1"
              width="100%"
              style={{ width: '100%' }}
            />
            <Stack
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: '#2B3445',
                  fontSize: '18px',
                }}
              >
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#2B3445',
                  lineHeight: '16px',
                  mt: 1,
                }}
              >
                DESKTOPS &
              </Typography>
              <Typography variant="h6" sx={{ color: '#2B3445' }}>
                LAPTOPS
              </Typography>

              <Link
                sx={{
                  color: '#2B3445',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: '.2s',

                  '&:hover': {
                    color: '#D23F57',
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: '13px' }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Icons />
    </Container>
  );
};

export default Hero;

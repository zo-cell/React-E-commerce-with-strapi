import './main.css';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from '@mui/material';

import { useState } from 'react';
import { AddShoppingCartOutlined, Close } from '@mui/icons-material';
import ProductDetails from '../../../ProductDetails';
import { useGetproductByNameQuery } from '../../Redux/product';
const Main = () => {
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const [productTitle, setProductTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [mainImage, setMainImage] = useState();
  const [smallImages, setSmallImages] = useState();

  const handleClickOpen = (title, price, description, mainImage, smallImages) => {
    setOpen(true);
    setProductTitle(title);
    setPrice(price);
    setDescription(description);
    setMainImage(mainImage);
    setSmallImages(smallImages);
  };



  const handleClose = () => {
    setOpen(false);
  };

  const allProductsApi = 'products/?populate=*';
  const menProductsApi = 'products/?populate=*&filters[categories][$eq]=men';
  const womenProductsApi =
    'products/?populate=*&filters[categories][$eq]=women';

  const [MyData, setMyData] = useState(allProductsApi);

  const { data, error, isLoading } = useGetproductByNameQuery(MyData);

  function handleData(data) {
    if (data === 'allProducts') {
      setMyData(allProductsApi);
    } else if (data === 'menProducts') {
      setMyData(menProductsApi);
    } else if (data === 'womenProducts') {
      setMyData(womenProductsApi);
    }
  }

  if (isLoading) {
    return <Typography variant="h6">Loading.....</Typography>;
  }

  if (error) {
    return <Typography variant="h6">{error.message}</Typography>;
  }

  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          flexWrap={'wrap'}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            color="error"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              '.Mui-selected': {
                border: '1px solid rgba(233 69 96 .5) !important',
                color: '#e94560 !important',
                backgroundColor: 'initial',
              },
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            <ToggleButton
              className="myBtn"
              value="left"
              aria-label="left aligned"
              sx={{ color: theme.palette.text.primary }}
              onClick={() => handleData('allProducts')}
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{ mx: '16px !important', color: theme.palette.text.primary }}
              className="myBtn"
              value="center"
              aria-label="centered"
              onClick={() => handleData('menProducts')}
            >
              Men Category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="myBtn"
              value="right"
              aria-label="right aligned"
              onClick={() => handleData('womenProducts')}
            >
              Women Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          rowGap={5}
          columnGap={3}
          direction={'row'}
          justifyContent={'center'}
          flexWrap={'wrap'}
        >
          {data.data.map((item, i) => {
            return (
              <Card
                key={i}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ':hover .MuiCardMedia-root': {
                    scale: '1.05',
                    rotate: '1deg',
                    transition: '.35s',
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 387 }}
                  image={
                    item.attributes.image.data[0].attributes.url
                  }
                  title="green iguana"
                />

                <CardContent>
                  <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.title}
                    </Typography>

                    <Typography variant="subtitle1" component="p">
                      {item.attributes.price}$
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: 'space-between' }}>


                  <Button
                    onClick={() => handleClickOpen(item.attributes.title, item.attributes.price, item.attributes.description, item.attributes.image.data[0].attributes.url, item.attributes.image.data)}
                    sx={{ textTransform: 'capitalize' }}
                    size="small"
                  >
                    <AddShoppingCartOutlined fontSize="small" sx={{ mr: 1 }} />
                    Add to cart
                  </Button>


                  <Rating
                    name="read-only"
                    value={item.attributes.rate}
                    precision={0.5}
                    readOnly
                  />
                </CardActions>


              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{ '.MuiPaper-root': { minWidth: { xs: '100%', md: 800 } } }}
          open={open}
          onClose={handleClose}
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
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          <ProductDetails title={productTitle} price={price} description={description} mainImage={mainImage} smallImages={smallImages} />
        </Dialog>
      </Container>
    );
  }
};

export default Main;

import { AddShoppingCartOutlined } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useGetproductByNameQuery } from './src/Redux/product';

function setLargImage(src) {
  document.getElementById('largImage').src = src;
}

// eslint-disable-next-line react/prop-types
const ProductDetails = ({title, price, description, mainImage, smallImages}) => {
  const { data, error, isLoading } = useGetproductByNameQuery(
    'products/?populate=*',
  );


  if (isLoading) {
    return <Typography variant="h6">Loading.....</Typography>;
  }

  if (error) {
    return <Typography variant="h6">{error.message}</Typography>;
  }

  if (data) {
    return (

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2.5,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >

        <Box sx={{ display: 'flex' }}>
          <img
            width={300}
            src={mainImage}
            alt="img"
            id="largImage"
          />
        </Box>

        <Box
          sx={{
            textAlign: { xs: 'center', sm: 'left' },
            pt: { xs: 1, sm: 5, md: 0 },
          }}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Typography variant="h5">{title}</Typography>


          <Typography my={0.4} fontSize={'22px'} color={'crimson'}>
            {price}$
          </Typography>
          <Typography variant="body1">
            {description}
          </Typography>

          <Stack
            sx={{ justifyContent: { xs: 'center', sm: 'left' } }}
            direction={'row'}
            gap={1}
            my={2}
          >
             {/* eslint-disable-next-line react/prop-types */}
            {smallImages.map((item, i) => {
              return (
                <img
                  key={i}
                  style={{ borderRadius: 3, cursor: 'pointer' }}
                  height={100}
                  width={90}
                  src={item.attributes.url}
                  alt=""
                  id="smallImage"
                  onClick={() => setLargImage(item)}
                />
              );
            })}
          </Stack>

          <Button
            sx={{ textTransform: 'capitalize', mb: { xs: 1, sm: 7, md: 0 } }}
            variant="contained"
          >
            <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
            Buy now
          </Button>
        </Box>
      </Box>
    );
  }
};
export default ProductDetails;

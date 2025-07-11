import PropTypes from 'prop-types';
import { useEffect, useState, useMemo } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

// material-ui
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';
import FloatingCart from 'components/cards/e-commerce/FloatingCart';
import ProductFeatures from 'sections/apps/e-commerce/product-details/ProductFeatures';
import ProductImages from 'sections/apps/e-commerce/product-details/ProductImages';
import ProductInfo from 'sections/apps/e-commerce/product-details/ProductInfo';
import ProductReview from 'sections/apps/e-commerce/product-details/ProductReview';
import ProductSpecifications from 'sections/apps/e-commerce/product-details/ProductSpecifications';
import RelatedProducts from 'sections/apps/e-commerce/product-details/RelatedProducts';

import { resetCart, useGetCart } from 'api/cart';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-details-tabpanel-${index}`}
      aria-labelledby={`product-details-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `product-details-tab-${index}`,
    'aria-controls': `product-details-tabpanel-${index}`
  };
}

// ==============================|| PRODUCT DETAILS - MAIN ||============================== //

export default function ProductDetails() {
  const { id } = useParams();

  const product = useLoaderData();
  const { cart } = useGetCart();

  // product description tabs
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // clear cart if complete order
    if (cart && cart.step > 2) {
      resetCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productImages = useMemo(() => <ProductImages product={product} />, [product]);
  const relatedProducts = useMemo(() => <RelatedProducts id={id} />, [id]);

  return (
    <>
      {product && Number(product.id) === Number(id) && (
        <Grid container spacing={2}>
          <Grid size={12}>
            <MainCard>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>{productImages}</Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <ProductInfo product={product} />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, md: 7, xl: 8 }}>
            <MainCard>
              <Stack sx={{ gap: 3 }}>
                <Stack>
                  <Tabs
                    value={value}
                    indicatorColor="primary"
                    onChange={handleChange}
                    aria-label="product description tabs example"
                    variant="scrollable"
                  >
                    <Tab component={Link} to="#" label="Features" {...a11yProps(0)} />
                    <Tab component={Link} to="#" label="Specifications" {...a11yProps(1)} />
                    <Tab component={Link} to="#" label="Overview" {...a11yProps(2)} />
                    <Tab
                      component={Link}
                      to="#"
                      label={
                        <Stack direction="row" sx={{ alignItems: 'center' }}>
                          Reviews{' '}
                          <Chip
                            label={String(product.offerPrice?.toFixed(0))}
                            size="small"
                            sx={{
                              ml: 0.5,
                              color: value === 3 ? 'primary.main' : 'grey.0',
                              bgcolor: value === 3 ? 'primary.lighter' : 'grey.400',
                              borderRadius: '10px'
                            }}
                          />
                        </Stack>
                      }
                      {...a11yProps(3)}
                    />
                  </Tabs>
                  <Divider />
                </Stack>
                <TabPanel value={value} index={0}>
                  <ProductFeatures />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <ProductSpecifications />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Stack sx={{ gap: 2.5 }}>
                    <Typography color="text.secondary">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard
                      dummy text ever since the 1500s,{' '}
                      <Typography component="span" variant="subtitle1">
                        {' '}
                        &ldquo;When an unknown printer took a galley of type and scrambled it to make a type specimen book.&rdquo;
                      </Typography>{' '}
                      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                      unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                      more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    <Typography color="text.secondary">
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                  </Stack>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <ProductReview product={product} />
                </TabPanel>
              </Stack>
            </MainCard>
          </Grid>
          <Grid sx={{ position: 'relative' }} size={{ xs: 12, md: 5, xl: 4 }}>
            <MainCard
              title="Related Products"
              sx={{ height: 1, position: { xs: 'relative', md: 'absolute' }, left: 0, right: 0 }}
              content={false}
            >
              {relatedProducts}
            </MainCard>
          </Grid>
        </Grid>
      )}
      <FloatingCart />
    </>
  );
}

TabPanel.propTypes = { children: PropTypes.any, value: PropTypes.any, index: PropTypes.any, other: PropTypes.any };

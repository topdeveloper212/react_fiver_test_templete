import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import LinearProgress from '@mui/material/LinearProgress';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Skeleton from '@mui/material/Skeleton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

// third-party
import { format } from 'date-fns';

// project imports
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import ProductReview from 'components/cards/e-commerce/ProductReview';
import { getProductReviews } from 'api/products';

// assets
import FileAddOutlined from '@ant-design/icons/FileAddOutlined';
import VideoCameraAddOutlined from '@ant-design/icons/VideoCameraAddOutlined';
import SmileOutlined from '@ant-design/icons/SmileOutlined';
import StarFilled from '@ant-design/icons/StarFilled';
import StarOutlined from '@ant-design/icons/StarOutlined';

// progress
function LinearProgressWithLabel({ star, color, value, ...others }) {
  return (
    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
      <LinearProgress value={value} variant="determinate" color={color} {...others} sx={{ width: '100%', bgcolor: 'secondary.lighter' }} />
      <Typography variant="body2" sx={{ minWidth: 50 }} color="text.secondary">{`${Math.round(star)} Star`}</Typography>
    </Stack>
  );
}

// ==============================|| PRODUCT DETAILS - REVIEWS ||============================== //

export default function ProductReviews({ product }) {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async () => {
      await getProductReviews().then((response) => {
        setReviews(response.data.productReviews);
        setLoader(false);
      });
    };
  }, []);

  let productReview = (
    <Grid size={12}>
      <List>
        {[1, 2, 3].map((index) => (
          <MainCard content={false} key={index} sx={{ mb: 2.5 }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar sx={{ minWidth: 72 }}>
                <Skeleton variant="rectangular" width={62} height={62} />
              </ListItemAvatar>
              <ListItemText
                primary={<Skeleton animation="wave" height={22} />}
                secondary={
                  <>
                    <Skeleton animation="wave" height={14} width="60%" />
                    <Skeleton animation="wave" height={18} width="20%" />
                    <Skeleton animation="wave" height={14} width="35%" sx={{ mt: 1.25 }} />
                    <Skeleton animation="wave" height={14} width="100%" />
                    <Skeleton animation="wave" height={14} width="55%" />
                  </>
                }
              />
            </ListItem>
          </MainCard>
        ))}
      </List>
    </Grid>
  );

  if (reviews && !loader) {
    productReview = reviews.map((review, index) => (
      <Grid key={index} size={12}>
        <MainCard sx={{ bgcolor: 'grey.A50' }}>
          <ProductReview
            avatar={review.profile.avatar}
            date={format(new Date(review.date), 'dd/MM, yyyy h:dd:ss a')}
            name={review.profile.name}
            rating={review.rating}
            review={review.review}
          />
        </MainCard>
      </Grid>
    ));
  }

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <MainCard>
          <Grid container justifyContent="space-between" alignItems="center" spacing={2.5}>
            <Grid>
              {product && (
                <Stack spacing={1} sx={{ height: '100%' }}>
                  <Stack sx={{ gap: 1 }}>
                    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
                      <Typography variant="h2">{Number((product.rating < 4 ? product.rating + 1 : product.rating).toFixed(1))}</Typography>
                      <Typography variant="h4" color="text.secondary">
                        /5
                      </Typography>
                    </Stack>
                    <Typography color="text.secondary">Based on {product.offerPrice?.toFixed(0)} reviews</Typography>
                  </Stack>
                  <Rating
                    name="simple-controlled"
                    value={product.rating < 4 ? product.rating + 1 : product.rating}
                    icon={<StarFilled style={{ fontSize: 'inherit' }} />}
                    emptyIcon={<StarOutlined style={{ fontSize: 'inherit' }} />}
                    readOnly
                    precision={0.1}
                  />
                </Stack>
              )}
            </Grid>
            <Grid>
              <Grid container alignItems="center" justifyContent="space-between" spacing={1}>
                <Grid size={12}>
                  <LinearProgressWithLabel color="warning" star={5} value={100} />
                </Grid>
                <Grid size={12}>
                  <LinearProgressWithLabel color="warning" star={4} value={80} />
                </Grid>
                <Grid size={12}>
                  <LinearProgressWithLabel color="warning" star={3} value={60} />
                </Grid>
                <Grid size={12}>
                  <LinearProgressWithLabel color="warning" star={2} value={40} />
                </Grid>
                <Grid size={12}>
                  <LinearProgressWithLabel color="warning" star={1} value={20} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      {productReview}
      <Grid size={12}>
        <Stack direction="row" sx={{ justifyContent: 'center' }}>
          <Button variant="text" sx={{ textTransform: 'none' }}>
            View more comments
          </Button>
        </Stack>
      </Grid>
      <Grid size={12}>
        <Box sx={{ p: 2, pb: 1.5, border: '1px solid', borderColor: 'divider' }}>
          <Grid container alignItems="center" spacing={0.5}>
            <Grid size={12}>
              <TextField
                fullWidth
                placeholder="Add Comment"
                sx={{
                  mb: 3,
                  '& input': { bgcolor: 'transparent', p: 0, borderRadius: '0px' },
                  '& fieldset': { display: 'none' },
                  '& .MuiFormHelperText-root': {
                    ml: 0
                  },
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'transparent',
                    '&.Mui-focused': {
                      boxShadow: 'none'
                    }
                  }
                }}
              />
            </Grid>
            <Grid>
              <IconButton>
                <VideoCameraAddOutlined />
              </IconButton>
            </Grid>
            <Grid>
              <IconButton>
                <FileAddOutlined />
              </IconButton>
            </Grid>
            <Grid>
              <IconButton>
                <SmileOutlined />
              </IconButton>
            </Grid>
            <Grid size="grow" />
            <Grid>
              <Button size="small" variant="contained" color="primary">
                Comment
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

LinearProgressWithLabel.propTypes = {
  star: PropTypes.number,
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning', undefined]),
  value: PropTypes.number,
  others: PropTypes.any
};

ProductReviews.propTypes = { product: PropTypes.any };

// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

// third-party
import { motion } from 'framer-motion';

// ==============================|| LANDING - NUMBER BLOCK PAGE ||============================== //

export default function NumberBlock() {
  return (
    <Container>
      <Grid container alignItems="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.2
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid>
                <Typography variant="h2" sx={{ minWidth: 80, textAlign: 'right' }}>
                  128+
                </Typography>
              </Grid>
              <Grid size="grow">
                <Grid container spacing={1}>
                  <Grid size={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      Pages
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="body1">Hand Crafted useful pages with best user experience.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.4
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid>
                <Typography variant="h2" sx={{ minWidth: 80, textAlign: 'right' }}>
                  200+
                </Typography>
              </Grid>
              <Grid size="grow">
                <Grid container spacing={1}>
                  <Grid size={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      MUI Components
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="body1">Made using MUI v6 React - A Most popular React Platform.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <motion.div
            initial={{ opacity: 0, translateY: 550 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 30,
              delay: 0.6
            }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid>
                <Typography variant="h2" sx={{ minWidth: 80, textAlign: 'right' }}>
                  5+
                </Typography>
              </Grid>
              <Grid size="grow">
                <Grid container spacing={1}>
                  <Grid size={12}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      Conceptual Apps
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="body1">Find out 5+ working apps which suits your React Project.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}

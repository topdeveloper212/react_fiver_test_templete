import { Link as RouterLink } from 'react-router-dom';

// material-ui
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// project imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';

// assets
import Avatar1 from 'assets/images/users/avatar-1.png';
import Avatar2 from 'assets/images/users/avatar-2.png';
import Avatar3 from 'assets/images/users/avatar-3.png';
import Avatar4 from 'assets/images/users/avatar-4.png';

// ===========================|| DATA WIDGET - TEAM MEMBERS CARD ||=========================== //

export default function TeamMembers() {
  return (
    <MainCard
      title="Team Members"
      content={false}
      secondary={
        <Link component={RouterLink} to="#" color="primary">
          View all
        </Link>
      }
    >
      <CardContent>
        <Grid container spacing={2.5} alignItems="center">
          <Grid size={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid>
                <Avatar alt="User 1" src={Avatar1} />
              </Grid>
              <Grid size="grow">
                <Typography variant="subtitle1">David Jones</Typography>
                <Typography variant="caption" color="secondary">
                  Project Leader
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="caption">5 min ago</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid>
                <Avatar alt="User 1" src={Avatar2} />
              </Grid>
              <Grid size="grow">
                <Typography variant="subtitle1">David Jones</Typography>
                <Typography variant="caption" color="secondary">
                  HR Manager
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="caption">1 hour ago</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid>
                <Avatar alt="User 1" src={Avatar3} />
              </Grid>
              <Grid size="grow">
                <Typography variant="subtitle1">David Jones</Typography>
                <Typography variant="caption" color="secondary">
                  Developer
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="caption">Yesterday</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid>
                <Avatar alt="User 1" src={Avatar4} />
              </Grid>
              <Grid size="grow">
                <Typography variant="subtitle1">David Jones</Typography>
                <Typography variant="caption" color="secondary">
                  UI/UX Designer
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="caption">02-05-2021</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </MainCard>
  );
}

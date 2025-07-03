// material-ui
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// project imports
import Avatar from 'components/@extended/Avatar';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import MainCard from 'components/MainCard';

// assets
import Target from 'assets/images/analytics/target.svg';

// ==============================|| LABELLED TASKS ||============================== //

export default function LabelledTasks() {
  return (
    <Grid size={12}>
      <MainCard sx={{ width: '100%' }}>
        <Grid container spacing={1.25}>
          <Grid size={6}>
            <Typography>Published Project</Typography>
          </Grid>
          <Grid size={6}>
            <LinearWithLabel value={30} color="primary" />
          </Grid>
          <Grid size={6}>
            <Typography>Completed Task</Typography>
          </Grid>
          <Grid size={6}>
            <LinearWithLabel value={90} color="success" />
          </Grid>
          <Grid size={6}>
            <Typography>Pending Task</Typography>
          </Grid>
          <Grid size={6}>
            <LinearWithLabel value={50} color="error" />
          </Grid>
          <Grid size={6}>
            <Typography>Issues</Typography>
          </Grid>
          <Grid size={6}>
            <LinearWithLabel value={55} color="warning" />
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={12}>
            <List sx={{ pb: 0 }}>
              <ListItem sx={{ p: 0 }}>
                <ListItemAvatar>
                  <Avatar sx={{ background: 'transparent' }}>
                    <CardMedia component="img" alt="target" src={Target} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Income Salaries & Budget"
                  secondary="All your income salaries and budget comes here, you can track them or manage them"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </MainCard>
    </Grid>
  );
}

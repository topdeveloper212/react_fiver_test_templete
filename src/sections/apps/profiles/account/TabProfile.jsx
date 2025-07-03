import useMediaQuery from '@mui/material/useMediaQuery';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// third-party
import { PatternFormat } from 'react-number-format';

// project imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

// assets
import AimOutlined from '@ant-design/icons/AimOutlined';
import EnvironmentOutlined from '@ant-design/icons/EnvironmentOutlined';
import MailOutlined from '@ant-design/icons/MailOutlined';
import PhoneOutlined from '@ant-design/icons/PhoneOutlined';

import defaultImages from 'assets/images/users/default.png';

// ==============================|| ACCOUNT PROFILE - BASIC ||============================== //

export default function TabProfile() {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, sm: 5, md: 4, xl: 3 }}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <MainCard>
              <Grid container spacing={3}>
                <Grid size={12}>
                  <Stack direction="row" sx={{ justifyContent: 'flex-end' }}>
                    <Chip label="Pro" size="small" color="primary" />
                  </Stack>
                  <Stack sx={{ gap: 2.5, alignItems: 'center' }}>
                    <Avatar alt="Avatar 1" size="xl" src={defaultImages} />
                    <Stack sx={{ gap: 0.5, alignItems: 'center' }}>
                      <Typography variant="h5">Anshan H.</Typography>
                      <Typography color="secondary">Project Manager</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Grid size={12}>
                  <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-around' }}>
                    <Stack sx={{ gap: 0.5, alignItems: 'center' }}>
                      <Typography variant="h5">86</Typography>
                      <Typography color="secondary">Post</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack sx={{ gap: 0.5, alignItems: 'center' }}>
                      <Typography variant="h5">40</Typography>
                      <Typography color="secondary">Project</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack sx={{ gap: 0.5, alignItems: 'center' }}>
                      <Typography variant="h5">4.5K</Typography>
                      <Typography color="secondary">Members</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={12}>
                  <Divider />
                </Grid>
                <Grid size={12}>
                  <List component="nav" aria-label="main mailbox folders" sx={{ py: 0 }}>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <MailOutlined />
                      </ListItemIcon>
                      <ListItemText primary="anshan.dh81@gmail.com" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <PhoneOutlined />
                      </ListItemIcon>
                      <ListItemText primary="(+1-876) 8654 239 581" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <AimOutlined />
                      </ListItemIcon>
                      <ListItemText primary="New York" />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <EnvironmentOutlined />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Link href="https://google.com" target="_blank" sx={{ textAlign: 'right' }}>
                            https://anshan.dh.url
                          </Link>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={12}>
            <MainCard title="Skills">
              <Grid container spacing={1.25}>
                <Grid size={6}>
                  <Typography color="secondary">Junior</Typography>
                </Grid>
                <Grid size={6}>
                  <LinearWithLabel value={30} />
                </Grid>
                <Grid size={6}>
                  <Typography color="secondary">UX Reseacher</Typography>
                </Grid>
                <Grid size={6}>
                  <LinearWithLabel value={80} />
                </Grid>
                <Grid size={6}>
                  <Typography color="secondary">Wordpress</Typography>
                </Grid>
                <Grid size={6}>
                  <LinearWithLabel value={90} />
                </Grid>
                <Grid size={6}>
                  <Typography color="secondary">HTML</Typography>
                </Grid>
                <Grid size={6}>
                  <LinearWithLabel value={30} />
                </Grid>
                <Grid size={6}>
                  <Typography color="secondary">Graphic Design</Typography>
                </Grid>
                <Grid size={6}>
                  <LinearWithLabel value={95} />
                </Grid>
                <Grid size={6}>
                  <Typography color="secondary">Code Style</Typography>
                </Grid>
                <Grid size={6}>
                  <LinearWithLabel value={75} />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, sm: 7, md: 8, xl: 9 }}>
        <Grid container spacing={3}>
          <Grid size={12}>
            <MainCard title="About me">
              <Typography color="secondary">
                Hello, I’m Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, I create digital Products a
                more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.
              </Typography>
            </MainCard>
          </Grid>
          <Grid size={12}>
            <MainCard title="Personal Details">
              <List sx={{ py: 0 }}>
                <ListItem divider={!downMD}>
                  <Grid container spacing={3} sx={{ width: 1 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Full Name</Typography>
                        <Typography>Anshan Handgun</Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Father Name</Typography>
                        <Typography>Mr. Deepen Handgun</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!downMD}>
                  <Grid container spacing={3} sx={{ width: 1 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Phone</Typography>
                        <Typography>
                          (+1-876) <PatternFormat value={8654239581} displayType="text" type="text" format="#### ### ###" />
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Country</Typography>
                        <Typography>New York</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider={!downMD}>
                  <Grid container spacing={3} sx={{ width: 1 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Email</Typography>
                        <Typography>anshan.dh81@gmail.com</Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Zip Code</Typography>
                        <Typography>956 754</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Stack sx={{ gap: 0.5 }}>
                    <Typography color="secondary">Address</Typography>
                    <Typography>Street 110-B Kalians Bag, Dewan, M.P. New York</Typography>
                  </Stack>
                </ListItem>
              </List>
            </MainCard>
          </Grid>
          <Grid size={12}>
            <MainCard title="Education">
              <List sx={{ py: 0 }}>
                <ListItem divider>
                  <Grid container spacing={{ xs: 0.5, md: 3 }} sx={{ width: 1 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Master Degree (Year)</Typography>
                        <Typography>2014-2017</Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Institute</Typography>
                        <Typography>-</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem divider>
                  <Grid container spacing={{ xs: 0.5, md: 3 }} sx={{ width: 1 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Bachelor (Year)</Typography>
                        <Typography>2011-2013</Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Institute</Typography>
                        <Typography>Imperial College London</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container spacing={{ xs: 0.5, md: 3 }} sx={{ width: 1 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">School (Year)</Typography>
                        <Typography>2009-2011</Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Institute</Typography>
                        <Typography>School of London, England</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </MainCard>
          </Grid>
          <Grid size={12}>
            <MainCard title="Emplyment">
              <List sx={{ py: 0 }}>
                <ListItem divider>
                  <Grid container spacing={{ xs: 0.5, md: 3 }} sx={{ width: 1 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Senior UI/UX designer (Year)</Typography>
                        <Typography>2019-Current</Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Job Responsibility</Typography>
                        <Typography>
                          Perform task related to project manager with the 100+ team under my observation. Team management is key role in
                          this company.
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container spacing={{ xs: 0.5, md: 3 }} sx={{ width: 1 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Trainee cum Project Manager (Year)</Typography>
                        <Typography>2017-2019</Typography>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Stack sx={{ gap: 0.5 }}>
                        <Typography color="secondary">Job Responsibility</Typography>
                        <Typography>Team management is key role in this company.</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

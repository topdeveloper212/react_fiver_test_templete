import { cloneElement, useState } from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid2';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import AntAvatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import MainCard from 'components/MainCard';

// assets
import DeleteFilled from '@ant-design/icons/DeleteFilled';
import FolderOpenFilled from '@ant-design/icons/FolderOpenFilled';
import vector1 from 'assets/images/users/vector-1.png';
import avatar4 from 'assets/images/users/avatar-4.png';

function generate(element) {
  return [0, 1, 2].map((value) =>
    cloneElement(element, {
      key: value
    })
  );
}

const ListWrapper = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper
}));
ListWrapper.displayName = 'ListWrapper';

// ==============================|| LIST - INTERACTIVE ||============================== //

export default function InteractiveList() {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  const interactiveListCodeString = `<FormGroup row>
  <FormControlLabel
    control={<Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />}
    label="Enable dense"
  />
  <FormControlLabel
    control={<Checkbox checked={secondary} onChange={(event) => setSecondary(event.target.checked)} />}
    label="Enable secondary text"
  />
</FormGroup>
// Text Only
<ListWrapper>
  <List dense={dense}>
    {generate(
      <ListItem divider>
        <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
      </ListItem>
    )}
  </List>
</ListWrapper>

// Icon with text
<ListWrapper>
  <List dense={dense}>
    {generate(
      <ListItem divider>
        <ListItemIcon sx={{ mr: 0.5 }}>
          <FolderOpenFilled />
        </ListItemIcon>
        <ListItemText primary="Single item" secondary={secondary ? 'Secondary text' : null} />
      </ListItem>
    )}
  </List>
</ListWrapper>

// Avatar with text
<ListWrapper>
  <List dense={dense}>
    {generate(
      <ListItem divider>
        <ListItemAvatar>
          <AntAvatar>
            <img alt="Natacha" src="/src/assets/images/users/vector-1.png" height={40} />
          </AntAvatar>
        </ListItemAvatar>
        <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
      </ListItem>
    )}
  </List>
</ListWrapper>

// Avatar with text and icon
<ListWrapper>
  <List dense={dense}>
    {generate(
      <ListItem
        divider
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteFilled />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <AntAvatar alt="Avatar" src="/src/assets/images/users/avatar-4.png" />
        </ListItemAvatar>
        <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
      </ListItem>
    )}
  </List>
</ListWrapper>`;

  return (
    <MainCard codeString={interactiveListCodeString}>
      <Box sx={{ flexGrow: 1 }}>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={dense} onChange={(event) => setDense(event.target.checked)} />}
            label="Enable dense"
          />
          <FormControlLabel
            control={<Checkbox checked={secondary} onChange={(event) => setSecondary(event.target.checked)} />}
            label="Enable secondary text"
          />
        </FormGroup>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Typography sx={{ mt: 3 }} variant="h5">
              Text only
            </Typography>
            <ListWrapper>
              <List dense={dense}>
                {generate(
                  <ListItem divider>
                    <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
                  </ListItem>
                )}
              </List>
            </ListWrapper>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Typography variant="h5" sx={{ mt: { xs: 0, lg: 3 } }}>
              Icon with text
            </Typography>
            <ListWrapper>
              <List dense={dense}>
                {generate(
                  <ListItem divider>
                    <ListItemIcon sx={{ mr: 0.5 }}>
                      <FolderOpenFilled />
                    </ListItemIcon>
                    <ListItemText primary="Single item" secondary={secondary ? 'Secondary text' : null} />
                  </ListItem>
                )}
              </List>
            </ListWrapper>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid size={{ xs: 12, xl: 6 }}>
            <Typography variant="h5">Avatar with text</Typography>
            <ListWrapper>
              <List dense={dense}>
                {generate(
                  <ListItem divider>
                    <ListItemAvatar>
                      <AntAvatar>
                        <CardMedia component="img" alt="Natacha" src={vector1} sx={{ height: 40 }} />
                      </AntAvatar>
                    </ListItemAvatar>
                    <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
                  </ListItem>
                )}
              </List>
            </ListWrapper>
          </Grid>
          <Grid size={{ xs: 12, xl: 6 }}>
            <Typography variant="h5">Avatar with text and icon</Typography>
            <ListWrapper>
              <List dense={dense}>
                {generate(
                  <ListItem
                    divider
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteFilled />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <AntAvatar alt="Avatar" src={avatar4} />
                    </ListItemAvatar>
                    <ListItemText primary="Single-line item" secondary={secondary ? 'Secondary text' : null} />
                  </ListItem>
                )}
              </List>
            </ListWrapper>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
}

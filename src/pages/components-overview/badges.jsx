import { useState } from 'react';

// material-ui
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';
import ComponentHeader from 'components/cards/ComponentHeader';
import AntAvatar from 'components/@extended/Avatar';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

// assets
import MailOutlined from '@ant-design/icons/MailOutlined';
import MinusOutlined from '@ant-design/icons/MinusOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';

// ==============================|| COMPONENTS - BADGES ||============================== //

export default function ComponentBadge() {
  const [count, setCount] = useState(1);
  const [invisible, setInvisible] = useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const basicBadgesCodeString = `<Badge badgeContent={4} color="primary"><MailOutlined /></Badge>
<Badge badgeContent={4} color="secondary"><MailOutlined /></Badge>
<Badge badgeContent={4} color="success"><MailOutlined /></Badge>
<Badge badgeContent={4} color="warning"><MailOutlined /></Badge>
<Badge badgeContent={4} color="info"><MailOutlined /></Badge>
<Badge badgeContent={4} color="error"><MailOutlined /></Badge>`;

  const lightBadgesCodeString = `<Badge badgeContent={4} color="primary" variant="light"><MailOutlined /></Badge>
<Badge badgeContent={4} color="secondary" variant="light"><MailOutlined /></Badge>
<Badge badgeContent={4} color="success" variant="light"><MailOutlined /></Badge>
<Badge badgeContent={4} color="warning" variant="light"><MailOutlined /></Badge>
<Badge badgeContent={4} color="info" variant="light"><MailOutlined /></Badge>
<Badge badgeContent={4} color="error" variant="light"><MailOutlined /></Badge>`;

  const maxBadgesCodeString = `<Badge badgeContent={99} color="primary"><MailOutlined /></Badge>
<Badge badgeContent={100} color="secondary"><MailOutlined /></Badge>
<Badge badgeContent={1000} max={999} color="primary" variant="light"><MailOutlined /></Badge>
<Badge badgeContent={99} color="secondary" variant="light"><MailOutlined /></Badge>
<Badge badgeContent={99} color="error"><MailOutlined /></Badge>`;

  const dotBadgesCodeString = `<Badge color="primary" variant="dot"><MailOutlined /></Badge>
<Badge color="secondary" variant="dot"><MailOutlined /></Badge>
<Badge max={999} color="success" variant="dot"><MailOutlined /></Badge>
<Badge color="warning" variant="dot"><MailOutlined /></Badge>
<Badge color="info" variant="dot"><MailOutlined /></Badge>
<Badge color="error" variant="dot"><Typography variant="h6">Typography</Typography></Badge>`;

  const alignmentBadgesCodeString = `<Badge badgeContent={9} color="primary">
  <MailOutlined />
</Badge>
<Badge color="primary" variant="dot">
  <MailOutlined />
</Badge>
<Badge
  badgeContent={9}
  color="primary"
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right'
  }}
>
  <MailOutlined />
</Badge>
<Badge
  badgeContent={9}
  color="primary"
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'left'
  }}
>
  <MailOutlined />
</Badge>
<Badge
  badgeContent={99}
  color="primary"
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left'
  }}
>
  <MailOutlined />
</Badge>`;

  const overlapBadgesCodeString = `<Badge color="error" overlap="circular" variant="dot">
  <AntAvatar alt="Basic">
    <UserOutlined />
  </AntAvatar>
</Badge>
<Badge color="error" variant="dot">
  <AntAvatar alt="Basic" variant="rounded" type="filled">
    <UserOutlined />
  </AntAvatar>
</Badge>
<Badge color="error" variant="dot">
  <AntAvatar alt="Basic" variant="square" type="outlined">
    <UserOutlined />
  </AntAvatar>
</Badge>
<Badge badgeContent=" " color="error" overlap="circular">
  <AntAvatar alt="Basic" type="outlined">
    U
  </AntAvatar>
</Badge>
<Badge badgeContent=" " color="error">
  <AntAvatar alt="Basic" variant="rounded" type="filled">
    U
  </AntAvatar>
</Badge>
<Badge badgeContent=" " color="error">
  <AntAvatar alt="Basic" variant="square" type="outlined">
    U
  </AntAvatar>
</Badge>`;

  const visibleBadgesCodeString = `<Badge color="primary" badgeContent={count}><MailOutlined /></Badge>
<ButtonGroup>
  <Button
    aria-label="reduce"
    onClick={() => {
      setCount(Math.max(count - 1, 0));
    }}
  >
    <MinusOutlined />
  </Button>
  <Button
    aria-label="increase"
    onClick={() => {
      setCount(count + 1);
    }}
  >
    <PlusOutlined />
  </Button>
</ButtonGroup>
<Badge color="primary" variant="dot" invisible={invisible}><MailOutlined /></Badge>
<FormControlLabel
  sx={{ color: 'text.primary' }}
  control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
  label="Show Badge"
  labelPlacement="start"
/>`;

  return (
    <ComponentSkeleton>
      <ComponentHeader
        title="Badge"
        caption="Badge generates a small badge to the top-right of its child(ren)."
        directory="src/pages/components-overview/badges"
        link="https://mui.com/material-ui/react-badge/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="Basic" codeHighlight codeString={basicBadgesCodeString}>
              <Grid container spacing={3}>
                <Grid>
                  <Badge badgeContent={4} color="primary">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={4} color="secondary">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={4} color="success">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={4} color="warning">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={4} color="info">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={4} color="error">
                    <MailOutlined />
                  </Badge>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="Light" codeString={lightBadgesCodeString}>
              <Grid container spacing={3}>
                <Grid>
                  <Badge badgeContent={4} color="primary" variant="light">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={4} color="secondary" variant="light">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={4} color="success" variant="light">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={4} color="warning" variant="light">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={4} color="info" variant="light">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={4} color="error" variant="light">
                    <MailOutlined />
                  </Badge>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="Maximmum Value" codeString={maxBadgesCodeString}>
              <Grid container spacing={4}>
                <Grid>
                  <Badge badgeContent={99} color="primary">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={100} color="secondary">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={1000} max={999} color="primary" variant="light">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={99} color="secondary" variant="light">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent={99} color="error">
                    <MailOutlined />
                  </Badge>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="Dot Badges" codeString={dotBadgesCodeString}>
              <Grid container spacing={3}>
                <Grid>
                  <Badge color="primary" variant="dot">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge color="secondary" variant="dot">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge max={999} color="success" variant="dot">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge color="warning" variant="dot">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge color="info" variant="dot">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge color="error" variant="dot">
                    <Typography variant="h6">Typography</Typography>
                  </Badge>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="Alignment" codeString={alignmentBadgesCodeString}>
              <Grid container spacing={4}>
                <Grid>
                  <Badge badgeContent={9} color="primary">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge color="primary" variant="dot">
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge
                    badgeContent={9}
                    color="primary"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                  >
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge
                    badgeContent={9}
                    color="primary"
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left'
                    }}
                  >
                    <MailOutlined />
                  </Badge>
                </Grid>
                <Grid>
                  <Badge
                    badgeContent={99}
                    color="primary"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left'
                    }}
                  >
                    <MailOutlined />
                  </Badge>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="Overlap" codeString={overlapBadgesCodeString}>
              <Grid container spacing={2}>
                <Grid>
                  <Badge color="error" overlap="circular" variant="dot">
                    <AntAvatar alt="Basic">
                      <UserOutlined />
                    </AntAvatar>
                  </Badge>
                </Grid>
                <Grid>
                  <Badge color="error" variant="dot">
                    <AntAvatar alt="Basic" variant="rounded" type="filled">
                      <UserOutlined />
                    </AntAvatar>
                  </Badge>
                </Grid>
                <Grid>
                  <Badge color="error" variant="dot">
                    <AntAvatar alt="Basic" variant="square" type="outlined">
                      <UserOutlined />
                    </AntAvatar>
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent=" " color="error" overlap="circular">
                    <AntAvatar alt="Basic" type="outlined">
                      U
                    </AntAvatar>
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent=" " color="error">
                    <AntAvatar alt="Basic" variant="rounded" type="filled">
                      U
                    </AntAvatar>
                  </Badge>
                </Grid>
                <Grid>
                  <Badge badgeContent=" " color="error">
                    <AntAvatar alt="Basic" variant="square" type="outlined">
                      U
                    </AntAvatar>
                  </Badge>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }}>
            <MainCard title="Visibility" codeString={visibleBadgesCodeString}>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <Stack direction="row" sx={{ gap: 3, alignItems: 'center' }}>
                    <Badge color="primary" badgeContent={count}>
                      <MailOutlined />
                    </Badge>
                    <ButtonGroup>
                      <Button
                        aria-label="reduce"
                        onClick={() => {
                          setCount(Math.max(count - 1, 0));
                        }}
                      >
                        <MinusOutlined />
                      </Button>
                      <Button
                        aria-label="increase"
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        <PlusOutlined />
                      </Button>
                    </ButtonGroup>
                  </Stack>
                </Grid>
                <Grid size={12}>
                  <Stack direction="row" sx={{ gap: 0.25, alignItems: 'center' }}>
                    <Badge color="primary" variant="dot" invisible={invisible}>
                      <MailOutlined />
                    </Badge>
                    <FormControlLabel
                      sx={{ color: 'text.primary' }}
                      control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
                      label="Show Badge"
                      labelPlacement="start"
                    />
                  </Stack>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
}

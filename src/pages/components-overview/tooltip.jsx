import { useState } from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

// project imports
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import ComponentHeader from 'components/cards/ComponentHeader';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';
import CustomTooltip from 'components/@extended/Tooltip';

// assets
import DeleteFilled from '@ant-design/icons/DeleteFilled';
import PlusOutlined from '@ant-design/icons/PlusOutlined';

// tooltip
const LightTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    background: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}));
LightTooltip.displayName = 'LightTooltip';

const BootstrapTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.secondary.dark
  },
  [`& .${tooltipClasses.tooltip}`]: {
    background: theme.palette.secondary.dark
  }
}));
BootstrapTooltip.displayName = 'BootstrapTooltip';

const HtmlTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    background: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}));
HtmlTooltip.displayName = 'HtmlTooltip';

const CustomWidthTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500
  }
});
CustomWidthTooltip.displayName = 'CustomWidthTooltip';

const NoMaxWidthTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none'
  }
});
NoMaxWidthTooltip.displayName = 'NoMaxWidthTooltip';

// ==============================|| COMPONENT - TOOLTIP ||============================== //

export default function ComponentTooltip() {
  const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.`;

  const simpleTooltipsCodeString = `<Tooltip title="Delete">
  <IconButton aria-label="delete" size="large">
    <DeleteFilled />
  </IconButton>
</Tooltip>
<Tooltip title="Add" aria-label="add">
  <Fab color="primary" sx={{ m: 2 }}>
    <PlusOutlined />
  </Fab>
</Tooltip>`;

  const customTooltipsCodeString = `<LightTooltip title="Add">
  <Button>Light</Button>
</LightTooltip>
<BootstrapTooltip title="Add">
  <Button>Bootstrap</Button>
</BootstrapTooltip>
<HtmlTooltip
  title={
    <>
      <Typography color="inherit">Tooltip with HTML</Typography>
      <em>And here&apos;s</em>{' '}
      <Typography variant="subtitle1" >
        some
      </Typography>{' '}
      <u>amazing content</u>. it&apos;s very engaging. Right?
    </>
  }
>
  <Button>HTML</Button>
</HtmlTooltip>`;

  const arrowTooltipsCodeString = `<Tooltip title="Add" arrow>
  <Button>Arrow</Button>
</Tooltip>`;

  const delayTooltipsCodeString = `<Tooltip title="Add" enterDelay={500} leaveDelay={200}>
  <Button>[500ms, 200ms]</Button>
</Tooltip>`;

  const disabledTooltipsCodeString = `<Tooltip title="You Don't have permission to do this">
  <span>
    <Button disabled>A Disabled Button</Button>
  </span>
</Tooltip>`;

  const interactiveTooltipsCodeString = `<Tooltip title="Add" disableInteractive>
  <Button>Disable Interactive</Button>
</Tooltip>`;

  const controlledTooltipsCodeString = `<Tooltip disableFocusListener title="Add">
  <Button>Hover or touch</Button>
</Tooltip>
<Tooltip disableFocusListener disableTouchListener title="Add">
  <Button>Hover</Button>
</Tooltip>
<ClickAwayListener onClickAway={handleTooltipClose}>
  <div>
    <Tooltip
      PopperProps={{
        disablePortal: true
      }}
      onClose={handleTooltipClose}
      open={open}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      title="Add"
    >
      <Button onClick={handleTooltipOpen}>Click</Button>
    </Tooltip>
  </div>
</ClickAwayListener>`;

  const transitionsTooltipsCodeString = `<Tooltip title="Add">
  <Button>Grow</Button>
</Tooltip>
<Tooltip slots={{ transition: Fade }} slotProps={{ transition: { timeout: 600 } }} title="Add">
  <Button>Fade</Button>
</Tooltip>
<Tooltip slots={{ transition: Zoom }} title="Add">
  <Button>Zoom</Button>
</Tooltip>`;

  const variableTooltipsCodeString = `<Tooltip title={longText}>
  <Button sx={{ m: 1 }}>Default Width [300px]</Button>
</Tooltip>
<CustomWidthTooltip title={longText}>
  <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
</CustomWidthTooltip>
<NoMaxWidthTooltip title={longText}>
  <Button sx={{ m: 1 }}>No wrapping</Button>
</NoMaxWidthTooltip>`;

  const positionedTooltipsCodeString = `<Tooltip title="Add" placement="top-start">
  <Button color="secondary" variant="outlined">
    top-start
  </Button>
</Tooltip>
<Tooltip title="Add" placement="top">
  <Button color="secondary" variant="outlined">
    top
  </Button>
</Tooltip>
<Tooltip title="Add" placement="top-end">
  <Button color="secondary" variant="outlined">
    top-end
  </Button>
</Tooltip>
<Tooltip title="Add" placement="right-start">
  <Button color="secondary" variant="outlined">
    right-start
  </Button>
</Tooltip>
<Tooltip title="Add" placement="right">
  <Button color="secondary" variant="outlined">
    right
  </Button>
</Tooltip>
<Tooltip title="Add" placement="right-end">
  <Button color="secondary" variant="outlined">
    right-end
  </Button>
</Tooltip>
<Tooltip title="Add" placement="left-start">
  <Button color="secondary" variant="outlined">
    left-start
  </Button>
</Tooltip>
<Tooltip title="Add" placement="left">
  <Button color="secondary" variant="outlined">
    left
  </Button>
</Tooltip>
<Tooltip title="Add" placement="left-end">
  <Button color="secondary" variant="outlined">
    left-end
  </Button>
</Tooltip>
<Tooltip title="Add" placement="bottom-start">
  <Button color="secondary" variant="outlined">
    bottom-start
  </Button>
</Tooltip>
<Tooltip title="Add" placement="bottom">
  <Button color="secondary" variant="outlined">
    bottom
  </Button>
</Tooltip>
<Tooltip title="Add" placement="bottom-end">
  <Button color="secondary" variant="outlined">
    bottom-end
  </Button>
</Tooltip>`;
  const TooltipsVariantCodeString = `<CustomTooltip title="Add" color="primary">
  <Button color="primary" variant="outlined">
   primary
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="secondary">
  <Button color="secondary" variant="contained">
    Secondary
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="success">
  <Button color="success" variant="contained">
    Success
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="info">
  <Button color="info" variant="contained">
    Info
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="warning">
  <Button color="warning" variant="contained">
    Warning
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="error">
  <Button color="error" variant="contained">
    Error
  </Button>
</CustomTooltip>
`;

  const TooltipsCustomColorCodeString = `<CustomTooltip title="Add" color="#fff" bg="pink">
  <Button color="inherit" variant="outlined">
    pink
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="#fff">
  <Button color="inherit" variant="contained">
    Orange
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="#000">
  <Button color="inherit" variant="contained">
    Yellow
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="white" labelColor='#000'>
  <Button color="inherit" variant="contained">
    Black/White
  </Button>
</CustomTooltip>
`;

  return (
    <ComponentSkeleton>
      <ComponentHeader
        title="Tooltip"
        caption="Tooltips display informative text when users hover over, focus on, or tap an element."
        directory="src/pages/components-overview/tooltip"
        link="https://mui.com/material-ui/react-tooltip/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack sx={{ gap: 3 }}>
              <MainCard title="Simple Tooltips" codeHighlight codeString={simpleTooltipsCodeString}>
                <Grid container spacing={1} alignItems="center">
                  <Grid>
                    <Tooltip title="Delete">
                      <IconButton aria-label="delete" size="large">
                        <DeleteFilled />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid>
                    <Tooltip title="Add" aria-label="add">
                      <Fab color="primary" sx={{ m: 2 }}>
                        <PlusOutlined style={{ fontSize: '1.3rem' }} />
                      </Fab>
                    </Tooltip>
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Customized Tooltip" codeString={customTooltipsCodeString}>
                <Grid container spacing={1} alignItems="center">
                  <Grid>
                    <LightTooltip title="Add">
                      <Button>Light</Button>
                    </LightTooltip>
                  </Grid>
                  <Grid>
                    <BootstrapTooltip title="Add">
                      <Button>Bootstrap</Button>
                    </BootstrapTooltip>
                  </Grid>
                  <Grid>
                    <HtmlTooltip
                      title={
                        <>
                          <Typography color="inherit">Tooltip with HTML</Typography>
                          <em>And here&apos;s</em>{' '}
                          <Typography variant="subtitle1" component="span">
                            some
                          </Typography>{' '}
                          <u>amazing content</u>. it&apos;s very engaging. Right?
                        </>
                      }
                    >
                      <Button>HTML</Button>
                    </HtmlTooltip>
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Arrow Tooltips" codeString={arrowTooltipsCodeString}>
                <Grid container spacing={1} alignItems="center">
                  <Grid>
                    <Tooltip title="Add" arrow>
                      <Button>Arrow</Button>
                    </Tooltip>
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Delay Tooltips" codeString={delayTooltipsCodeString}>
                <Grid container spacing={1} alignItems="center">
                  <Grid>
                    <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
                      <Button>[500ms, 200ms]</Button>
                    </Tooltip>
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Disabled Tooltips" codeString={disabledTooltipsCodeString}>
                <Grid container spacing={1} alignItems="center">
                  <Grid>
                    <Tooltip title="You Don't have permission to do this">
                      <span>
                        <Button disabled>A Disabled Button</Button>
                      </span>
                    </Tooltip>
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Disable Interactive Tooltips" codeString={interactiveTooltipsCodeString}>
                <Grid container spacing={1} alignItems="center">
                  <Grid>
                    <Tooltip title="Add" disableInteractive>
                      <Button>Disable Interactive</Button>
                    </Tooltip>
                  </Grid>
                </Grid>
              </MainCard>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack sx={{ gap: 3 }}>
              <MainCard title="Triggers/Controlled Tooltips" codeString={controlledTooltipsCodeString}>
                <Grid container spacing={1} alignItems="center">
                  <Grid>
                    <Tooltip disableFocusListener title="Add">
                      <Button>Hover or touch</Button>
                    </Tooltip>
                  </Grid>
                  <Grid>
                    <Tooltip disableFocusListener disableTouchListener title="Add">
                      <Button>Hover</Button>
                    </Tooltip>
                  </Grid>
                  <Grid>
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                      <div>
                        <Tooltip
                          onClose={handleTooltipClose}
                          open={open}
                          disableFocusListener
                          disableHoverListener
                          disableTouchListener
                          title="Add"
                          slotProps={{ popper: { disablePortal: true } }}
                        >
                          <Button onClick={handleTooltipOpen}>Click</Button>
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Transitions Tooltips" codeString={transitionsTooltipsCodeString}>
                <Grid container spacing={1} alignItems="center">
                  <Grid>
                    <Tooltip title="Add">
                      <Button>Grow</Button>
                    </Tooltip>
                  </Grid>
                  <Grid>
                    <Tooltip title="Add" slots={{ transition: Fade }} slotProps={{ transition: { timeout: 600 } }}>
                      <Button>Fade</Button>
                    </Tooltip>
                  </Grid>
                  <Grid>
                    <Tooltip title="Add" slots={{ transition: Zoom }}>
                      <Button>Zoom</Button>
                    </Tooltip>
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Variable Width Tooltips" codeString={variableTooltipsCodeString}>
                <Grid container spacing={1} alignItems="center">
                  <Grid>
                    <Tooltip title={longText}>
                      <Button sx={{ m: 1 }}>Default Width [300px]</Button>
                    </Tooltip>
                  </Grid>
                  <Grid>
                    <CustomWidthTooltip title={longText}>
                      <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
                    </CustomWidthTooltip>
                  </Grid>
                  <Grid>
                    <NoMaxWidthTooltip title={longText}>
                      <Button sx={{ m: 1 }}>No wrapping</Button>
                    </NoMaxWidthTooltip>
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Positioned Tooltips" codeString={positionedTooltipsCodeString}>
                <>
                  <Grid container justifyContent="center" spacing={1}>
                    <Grid>
                      <Tooltip title="Add" placement="top-start">
                        <Button color="secondary" variant="outlined">
                          top-start
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid>
                      <Tooltip title="Add" placement="top">
                        <Button color="secondary" variant="outlined">
                          top
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid>
                      <Tooltip title="Add" placement="top-end">
                        <Button color="secondary" variant="outlined">
                          top-end
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="center" sx={{ my: 1 }}>
                    <Grid container alignItems="flex-start" direction="column" spacing={1} size={6}>
                      <Grid>
                        <Tooltip title="Add" placement="right-start">
                          <Button color="secondary" variant="outlined">
                            right-start
                          </Button>
                        </Tooltip>
                      </Grid>
                      <Grid>
                        <Tooltip title="Add" placement="right">
                          <Button color="secondary" variant="outlined">
                            right
                          </Button>
                        </Tooltip>
                      </Grid>
                      <Grid>
                        <Tooltip title="Add" placement="right-end">
                          <Button color="secondary" variant="outlined">
                            right-end
                          </Button>
                        </Tooltip>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="flex-end" direction="column" spacing={1} size={6}>
                      <Grid>
                        <Tooltip title="Add" placement="left-start">
                          <Button color="secondary" variant="outlined">
                            left-start
                          </Button>
                        </Tooltip>
                      </Grid>
                      <Grid>
                        <Tooltip title="Add" placement="left">
                          <Button color="secondary" variant="outlined">
                            left
                          </Button>
                        </Tooltip>
                      </Grid>
                      <Grid>
                        <Tooltip title="Add" placement="left-end">
                          <Button color="secondary" variant="outlined">
                            left-end
                          </Button>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="center" spacing={1}>
                    <Grid>
                      <Tooltip title="Add" placement="bottom-start">
                        <Button color="secondary" variant="outlined">
                          bottom-start
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid>
                      <Tooltip title="Add" placement="bottom">
                        <Button color="secondary" variant="outlined">
                          bottom
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid>
                      <Tooltip title="Add" placement="bottom-end">
                        <Button color="secondary" variant="outlined">
                          bottom-end
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </>
              </MainCard>
              <MainCard title="Color Variant Tooltips" codeString={TooltipsVariantCodeString}>
                <Grid container spacing={1} alignItems="center">
                  <Grid>
                    <CustomTooltip title="Add" color="primary">
                      <Button color="primary" variant="contained">
                        Primary
                      </Button>
                    </CustomTooltip>
                  </Grid>
                  <Grid>
                    <CustomTooltip title="Add" color="secondary">
                      <Button color="secondary" variant="contained">
                        Secondary
                      </Button>
                    </CustomTooltip>
                  </Grid>
                  <Grid>
                    <CustomTooltip title="Add" color="success">
                      <Button color="success" variant="contained">
                        Success
                      </Button>
                    </CustomTooltip>
                  </Grid>
                  <Grid>
                    <CustomTooltip title="Add" color="info">
                      <Button color="info" variant="contained">
                        Info
                      </Button>
                    </CustomTooltip>
                  </Grid>
                  <Grid>
                    <CustomTooltip title="Add" color="warning">
                      <Button color="warning" variant="contained">
                        Warning
                      </Button>
                    </CustomTooltip>
                  </Grid>
                  <Grid>
                    <CustomTooltip title="Add" color="error">
                      <Button color="error" variant="contained">
                        error
                      </Button>
                    </CustomTooltip>
                  </Grid>
                </Grid>
              </MainCard>
              <MainCard title="Custom Color Tooltips" codeString={TooltipsCustomColorCodeString}>
                <Grid container spacing={1} alignItems="center">
                  <Grid>
                    <CustomTooltip title="Add" color="pink" labelColor="#000">
                      <Button color="inherit" variant="outlined">
                        pink
                      </Button>
                    </CustomTooltip>
                  </Grid>
                  <Grid>
                    <CustomTooltip title="Add" color="orange">
                      <Button color="inherit" variant="outlined">
                        Orange
                      </Button>
                    </CustomTooltip>
                  </Grid>
                  <Grid>
                    <CustomTooltip title="Add" color="yellow" labelColor="#000">
                      <Button color="inherit" variant="outlined">
                        Yellow
                      </Button>
                    </CustomTooltip>
                  </Grid>
                  <Grid>
                    <CustomTooltip title="Add" color="#fff" labelColor="#000">
                      <Button color="inherit" variant="outlined">
                        Black/white
                      </Button>
                    </CustomTooltip>
                  </Grid>
                </Grid>
              </MainCard>
            </Stack>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
}

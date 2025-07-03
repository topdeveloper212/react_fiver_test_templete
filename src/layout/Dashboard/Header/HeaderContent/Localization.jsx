import { useRef, useState } from 'react';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';

import useConfig from 'hooks/useConfig';

// assets
import TranslationOutlined from '@ant-design/icons/TranslationOutlined';

// ==============================|| HEADER CONTENT - LOCALIZATION ||============================== //

export default function Localization() {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const { i18n, onChangeLocalization } = useConfig();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (lang) => {
    onChangeLocalization(lang);
    setOpen(false);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        sx={(theme) => ({
          color: 'text.primary',
          bgcolor: open ? 'grey.100' : 'transparent',
          ...theme.applyStyles('dark', { bgcolor: open ? 'background.default' : 'transparent' })
        })}
        aria-label="open localization"
        ref={anchorRef}
        aria-controls={open ? 'localization-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <TranslationOutlined />
      </IconButton>
      <Popper
        placement={downMD ? 'bottom-start' : 'bottom'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{ modifiers: [{ name: 'offset', options: { offset: [downMD ? 0 : 0, 9] } }] }}
      >
        {({ TransitionProps }) => (
          <Transitions type="grow" position={downMD ? 'top-right' : 'top'} in={open} {...TransitionProps}>
            <Paper sx={(theme) => ({ boxShadow: theme.customShadows.z1 })}>
              <ClickAwayListener onClickAway={handleClose}>
                <List
                  component="nav"
                  sx={{
                    p: 0,
                    width: '100%',
                    minWidth: 200,
                    maxWidth: { xs: 250, md: 290 },
                    bgcolor: 'background.paper',
                    borderRadius: 0.5
                  }}
                >
                  <ListItemButton selected={i18n === 'en'} onClick={() => handleListItemClick('en')}>
                    <ListItemText
                      primary={
                        <Grid container>
                          <Typography color="text.primary">English</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ ml: '8px' }}>
                            (UK)
                          </Typography>
                        </Grid>
                      }
                    />
                  </ListItemButton>
                  <ListItemButton selected={i18n === 'fr'} onClick={() => handleListItemClick('fr')}>
                    <ListItemText
                      primary={
                        <Grid container>
                          <Typography color="text.primary">français</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ ml: '8px' }}>
                            (French)
                          </Typography>
                        </Grid>
                      }
                    />
                  </ListItemButton>
                  <ListItemButton selected={i18n === 'ro'} onClick={() => handleListItemClick('ro')}>
                    <ListItemText
                      primary={
                        <Grid container>
                          <Typography color="text.primary">Română</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ ml: '8px' }}>
                            (Romanian)
                          </Typography>
                        </Grid>
                      }
                    />
                  </ListItemButton>
                  <ListItemButton selected={i18n === 'zh'} onClick={() => handleListItemClick('zh')}>
                    <ListItemText
                      primary={
                        <Grid container>
                          <Typography color="text.primary">中国人</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ ml: '8px' }}>
                            (Chinese)
                          </Typography>
                        </Grid>
                      }
                    />
                  </ListItemButton>
                </List>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
}

import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';

// assets
import SaveTwoTone from '@ant-design/icons/SaveTwoTone';
import PrinterTwoTone from '@ant-design/icons/PrinterTwoTone';
import HeartTwoTone from '@ant-design/icons/HeartTwoTone';
import ShareAltOutlined from '@ant-design/icons/ShareAltOutlined';

// =============================|| SPEEDDIAL - SIMPLE ||============================= //

export default function SimpleSpeedDials() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  // fab action options
  const actions = [
    { icon: <SaveTwoTone twoToneColor={theme.palette.grey[600]} style={{ fontSize: '1.15rem' }} />, name: 'Save' },
    { icon: <PrinterTwoTone twoToneColor={theme.palette.grey[600]} style={{ fontSize: '1.15rem' }} />, name: 'Print' },
    { icon: <ShareAltOutlined style={{ color: theme.palette.grey[600], fontSize: '1.15rem' }} />, name: 'Share' },
    { icon: <HeartTwoTone twoToneColor={theme.palette.grey[600]} style={{ fontSize: '1.15rem' }} />, name: 'Like' }
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [direction, setDirection] = useState('up');
  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const [hidden, setHidden] = useState(false);
  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  const basicSpeeddialCodeString = `<FormControlLabel control={<Switch checked={hidden} onChange={handleHiddenChange} color="primary" />} label="Hidden" />
<FormLabel component="legend">Direction</FormLabel>
<RadioGroup sx={{ mt: 1 }} aria-label="direction" name="direction" value={direction} onChange={handleDirectionChange} row>
  <FormControlLabel value="up" control={<Radio />} label="Up" />
  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
    <FormControlLabel value="right" control={<Radio />} label="Right" />
  </Box>
  <FormControlLabel value="down" control={<Radio />} label="Down" />
  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
    <FormControlLabel value="left" control={<Radio />} label="Left" />
  </Box>
</RadioGroup>
<Box sx={{ position: 'relative', mt: 3, height: 300 }}>
  <SpeedDial
    sx={{
      position: 'absolute',
      '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: 16,
        right: 16
      },
      '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: 16,
        left: 16
      }
    }}
    ariaLabel="SpeedDial example"
    hidden={hidden}
    icon={<SpeedDialIcon />}
    onClose={handleClose}
    onOpen={handleOpen}
    open={open}
    direction={direction}
  >
    {actions.map((action) => (
      <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />
    ))}
  </SpeedDial>
</Box>`;

  return (
    <MainCard title="Basic" codeString={basicSpeeddialCodeString}>
      <FormControlLabel control={<Switch checked={hidden} onChange={handleHiddenChange} color="primary" />} label="Hidden" />
      <FormLabel component="legend">Direction</FormLabel>
      <RadioGroup sx={{ mt: 1 }} aria-label="direction" name="direction" value={direction} onChange={handleDirectionChange} row>
        <FormControlLabel value="up" control={<Radio />} label="Up" />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <FormControlLabel value="right" control={<Radio />} label="Right" />
        </Box>
        <FormControlLabel value="down" control={<Radio />} label="Down" />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <FormControlLabel value="left" control={<Radio />} label="Left" />
        </Box>
      </RadioGroup>
      <Box sx={{ position: 'relative', mt: 3, height: 300 }}>
        <SpeedDial
          sx={{
            position: 'absolute',
            '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
              bottom: 16,
              right: 16
            },
            '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
              top: 16,
              left: 16
            },
            '& .MuiSpeedDialAction-fab': {
              bgcolor: 'secondary.200'
            }
          }}
          ariaLabel="SpeedDial example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />
          ))}
        </SpeedDial>
      </Box>
    </MainCard>
  );
}

import { useState } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Box from '@mui/material/Box';

// third-party
import { isWeekend } from 'date-fns';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| DATE PICKER - LANDSCAPE ||============================== //

export default function LandscapeDatePicker() {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [value, setValue] = useState(new Date());

  const landscapDatepickerCodeString = `<LocalizationProvider dateAdapter={AdapterDateFns}>
  <StaticDatePicker<Date>
    orientation="landscape"
    openTo="day"
    value={value}
    shouldDisableDate={isWeekend}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>`;

  return (
    <MainCard title="Landscape" codeString={landscapDatepickerCodeString}>
      <Box
        sx={{
          '& .MuiPickersLayout-root': {
            maxWidth: { sm: 320, md: 350, lg: 480 },
            minWidth: { xs: 232, sm: 320, md: 260, lg: 320 },
            marginInline: 'auto'
          },
          '& .MuiPickersToolbar-root': {
            px: { xs: 0, lg: 2 }
          },
          '& .MuiDateTimePickerToolbar-root': {
            width: '100%'
          },
          '& .MuiPickersToolbar-content': {
            justifyContent: { xs: 'space-between', lg: 'initial' }
          },
          '& .MuiPickersCalendarHeader-root': {
            pl: { xs: 0, sm: 1.5, lg: 3 }
          },
          '& .MuiDateCalendar-root': {
            m: '0 auto',
            width: { xs: 232, sm: 320, md: 260, lg: 320 }
          },
          '& .MuiTimeClock-root': {
            m: '0 auto',
            width: { xs: 232, sm: 320, md: 260, lg: 320 }
          },
          '& .MuiClock-root': {
            mt: 5,
            mx: 0
          },
          '& .MuiPickersArrowSwitcher-root': {
            right: { xs: 0, sm: 12, md: 0 }
          },
          '& .MuiYearCalendar-root': {
            width: 'auto'
          },
          '& .MuiButtonBase-root': {
            px: 1,
            height: { xs: 30, sm: 36, md: 33, lg: 36 }
          }
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            orientation={downLG ? 'portrait' : 'landscape'}
            openTo="day"
            value={value}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
      </Box>
    </MainCard>
  );
}

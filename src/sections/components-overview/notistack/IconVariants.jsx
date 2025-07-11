// material-ui
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

// third-party
import { enqueueSnackbar } from 'notistack';

// project imports
import MainCard from 'components/MainCard';
import { handlerIconVariants, useGetSnackbar } from 'api/snackbar';

// ==============================|| NOTISTACK - CUSTOM ICON ||============================== //

export default function IconVariants() {
  const { snackbar } = useGetSnackbar();

  const handleChange = (event) => {
    handlerIconVariants(event.target.value);
  };

  const NotiStackIconVariantsSnackbarCodeString = `<Button
variant="contained"
fullWidth
sx={{ marginBlockStart: 2 }}
onClick={() => {
  enqueueSnackbar('Your notification here', { variant: 'success' });
  handlerIconVariants(value);
}}
>
  Show Snackbar
</Button>`;

  return (
    <MainCard title="With Icons" codeString={NotiStackIconVariantsSnackbarCodeString}>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          value={snackbar.iconVariant}
          onChange={handleChange}
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="usedefault" control={<Radio />} label="Use Default" />
          <FormControlLabel value="useemojis" control={<Radio />} label="Use Emojis" />
          <FormControlLabel value="hide" control={<Radio />} label="Hide" />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        fullWidth
        sx={{ marginBlockStart: 2 }}
        onClick={() => {
          enqueueSnackbar('Your notification here', { variant: 'success' });
        }}
      >
        Show Snackbar
      </Button>
    </MainCard>
  );
}

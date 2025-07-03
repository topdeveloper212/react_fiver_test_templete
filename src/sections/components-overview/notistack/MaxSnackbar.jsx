// material-ui
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// third-party
import { enqueueSnackbar } from 'notistack';

// project imports
import MainCard from 'components/MainCard';
import { handlerIncrease, useGetSnackbar } from 'api/snackbar';

//asset
import MinusOutlined from '@ant-design/icons/MinusOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';

// ==============================|| NOTISTACK - MAXIMUM SNACKBAR ||============================== //

export default function MaxSnackbar() {
  const width = { minWidth: 'auto' };

  const { snackbar } = useGetSnackbar();

  const handlerMaxStack = () => {
    enqueueSnackbar('Your notification here');
  };

  const NotiStackMaxSnackbarCodeString = `<Button
variant="contained"
fullWidth
sx={{ marginBlockStart: 2 }}
onClick={() => {
  enqueueSnackbar('Your notification here');
  handlerIncrease(value);
}}
>
  Show Snackbar
</Button>`;

  return (
    <MainCard title="Maximum snackbars" codeString={NotiStackMaxSnackbarCodeString}>
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          size="small"
          sx={width}
          disabled={snackbar.maxStack === 0 || snackbar.maxStack <= 0}
          onClick={() => handlerIncrease(snackbar.maxStack - 1)}
        >
          <MinusOutlined />
        </Button>
        <Typography variant="body1">stack up to {snackbar.maxStack}</Typography>
        <Button
          variant="outlined"
          size="small"
          sx={width}
          disabled={snackbar.maxStack === 4 ? true : false}
          onClick={() => handlerIncrease(snackbar.maxStack + 1)}
        >
          <PlusOutlined />
        </Button>
      </Stack>
      <Button variant="contained" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => handlerMaxStack()}>
        Show Snackbar
      </Button>
    </MainCard>
  );
}

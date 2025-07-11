import { useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| MODAL - TRANSITIONS ||============================== //

export default function TransitionsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MainCard title="Transitions Modal">
      <Button onClick={handleOpen} variant="contained">
        Open modal
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <MainCard title="Transitions Modal" modal darkTitle content={false}>
            <CardContent>
              <Typography id="modal-modal-description">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
            </CardContent>
            <Divider />
            <Stack direction="row" sx={{ gap: 1, justifyContent: 'flex-end', px: 2.5, py: 2 }}>
              <Button color="error" size="small" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" size="small">
                Submit
              </Button>
            </Stack>
          </MainCard>
        </Fade>
      </Modal>
    </MainCard>
  );
}

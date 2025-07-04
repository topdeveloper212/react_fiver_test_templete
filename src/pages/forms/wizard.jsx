// material-ui
import Grid from '@mui/material/Grid2';

// project imports
import BasicWizard from 'sections/forms/wizard/basic-wizard';
import ValidationWizard from 'sections/forms/wizard/validation-wizard';

// ==============================|| FORMS WIZARD ||============================== //

export default function FormsWizard() {
  return (
    <Grid container spacing={2.5} justifyContent="center">
      <Grid size={{ xs: 12, md: 6, lg: 7 }}>
        <BasicWizard />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 7 }}>
        <ValidationWizard />
      </Grid>
    </Grid>
  );
}

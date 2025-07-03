import PropTypes from 'prop-types';
// material-ui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// assets
import CaretUpOutlined from '@ant-design/icons/CaretUpOutlined';
import CaretDownOutlined from '@ant-design/icons/CaretDownOutlined';

export default function TableWidgetCard({ color, title, count, percentage, isLoss, children, invoice }) {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Stack direction="column" sx={{ gap: 2 }}>
          <Typography variant="subtitle1">{title}</Typography>
          <Stack direction="column" sx={{ gap: 1 }}>
            <Typography variant="h4" color="inherit">
              {count}
            </Typography>
            <Stack direction="row" sx={{ gap: 1 }}>
              <Typography variant="subtitle1">{invoice}</Typography>
              <Typography color="secondary">invoices</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Stack sx={{ alignItems: 'flex-end' }}>
          {percentage && (
            <Stack direction="row" sx={{ gap: 1, alignItems: 'center', ml: 1.25, pl: 1 }}>
              {!isLoss && <CaretUpOutlined style={{ fontSize: '0.75rem', color: `${color}` }} />}
              {isLoss && <CaretDownOutlined style={{ fontSize: '0.75rem', color: `${color}` }} />}
              <Typography color="secondary">{percentage}%</Typography>
            </Stack>
          )}
          <Box sx={{ width: 1, height: 1 }}>{children}</Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

TableWidgetCard.propTypes = {
  color: PropTypes.any,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  children: PropTypes.any,
  invoice: PropTypes.string
};

import PropTypes from 'prop-types';
import { useEffect, useId, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

// material-ui
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

// third-party
import { format } from 'date-fns';
import { FieldArray, Form, Formik } from 'formik';
import * as yup from 'yup';

// project imports
import MainCard from 'components/MainCard';
import CircularLoader from 'components/CircularLoader';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

import InvoiceItem from 'sections/apps/invoice/InvoiceItem';
import InvoiceModal from 'sections/apps/invoice/InvoiceModal';
import AddressModal from 'sections/apps/invoice/AddressModal';

import { APP_DEFAULT_PATH } from 'config';
import {
  handlerCustomerTo,
  handlerCustomerFrom,
  handlerPreview,
  selectCountry,
  updateInvoice,
  useGetInvoice,
  useGetInvoiceMaster
} from 'api/invoice';
import { openSnackbar } from 'api/snackbar';

//asset
import EditOutlined from '@ant-design/icons/EditOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';

const validationSchema = yup.object({
  date: yup.date().required('Invoice date is required'),
  due_date: yup
    .date()
    .when('date', (date, schema) => date && schema.min(date, "Due date can't be before invoice date"))
    .nullable()
    .required('Due date is required'),
  customerInfo: yup
    .object({
      name: yup.string().required('Invoice receiver information is required')
    })
    .required('Invoice receiver information is required'),
  status: yup.string().required('Status selection is required'),
  country: yup.object().nullable().required('Please select a currency'),
  invoice_detail: yup
    .array()
    .required('Invoice details is required')
    .of(
      yup.object().shape({
        name: yup.string().required('Product name is required')
      })
    )
    .min(1, 'Invoice must have at least 1 items')
});

const invoiceSingleList = {
  name: '',
  address: '',
  phone: '',
  email: ''
};

function ItemAdd({ push }) {
  const baseId = useId(); // Generate a base ID
  const [idCounter, setIdCounter] = useState(0); // Counter for unique IDs

  const handleAddItem = () => {
    const newId = `${baseId}-${idCounter}`; // Create a unique ID by combining baseId and counter
    setIdCounter((prev) => prev + 1); // Increment the counter
    push({
      id: newId,
      name: '',
      description: '',
      qty: 1,
      price: '1.00'
    });
  };

  return (
    <Button
      color="primary"
      startIcon={<PlusOutlined />}
      onClick={handleAddItem}
      variant="dashed"
      sx={{ bgcolor: 'transparent !important' }}
    >
      Add Item
    </Button>
  );
}

// ==============================|| INVOICE EDIT - FORM ||============================== //

function EditForm({ list, invoiceMaster }) {
  const navigation = useNavigate();

  const notesLimit = 500;

  const handlerEdit = (values) => {
    const newList = {
      id: Number(list.id),
      invoice_id: Number(values.invoice_id),
      customer_name: values.cashierInfo?.name,
      email: values.cashierInfo?.email,
      avatar: Number(list.avatar),
      discount: Number(values.discount),
      tax: Number(values.tax),
      date: format(new Date(values.date), 'MM/dd/yyyy'),
      due_date: format(new Date(values.due_date), 'MM/dd/yyyy'),
      quantity: Number(
        values.invoice_detail?.reduce((sum, i) => {
          return sum + i.qty;
        }, 0)
      ),
      status: values.status,
      cashierInfo: values.cashierInfo,
      customerInfo: values.customerInfo,
      invoice_detail: values.invoice_detail,
      notes: values.notes
    };

    updateInvoice(newList.id, newList);
    openSnackbar({
      open: true,
      message: 'Invoice updated successfully',
      anchorOrigin: { vertical: 'top', horizontal: 'right' },
      variant: 'alert',

      alert: {
        color: 'success'
      },

      close: true
    });
    navigation('/apps/invoice/list');
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        id: list.id || '',
        invoice_id: list.invoice_id || '',
        status: list.status || '',
        date: new Date(list.date) || null,
        due_date: new Date(list.due_date) || null,
        cashierInfo: list.cashierInfo || invoiceSingleList,
        customerInfo: list.customerInfo || invoiceSingleList,
        invoice_detail: list.invoice_detail || [],
        discount: list.discount || 0,
        tax: list.tax || 0,
        notes: list.notes || '',
        country: invoiceMaster.country || null
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handlerEdit(values);
      }}
    >
      {({ handleBlur, errors, handleChange, handleSubmit, values, isValid, setFieldValue, touched }) => {
        const subtotal =
          values?.invoice_detail?.reduce((prev, curr) => {
            if (curr.name.trim().length > 0) return prev + Number(curr.price * Math.floor(curr.qty));
            else return prev;
          }, 0) || 0;
        const taxRate = (values?.tax * subtotal) / 100;
        const discountRate = (values.discount * subtotal) / 100;
        const total = subtotal - discountRate + taxRate;

        return (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Invoice Id</InputLabel>
                  <FormControl sx={{ width: '100%' }}>
                    <TextField
                      required
                      disabled
                      type="number"
                      name="invoice_id"
                      id="invoice_id"
                      value={values.invoice_id}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Status</InputLabel>
                  <FormControl sx={{ width: '100%' }}>
                    <Select
                      value={values.status}
                      displayEmpty
                      name="status"
                      renderValue={(selected) => {
                        if (selected.length === 0) {
                          return <Box sx={{ color: 'secondary.400' }}>Select status</Box>;
                        }
                        return selected;
                      }}
                      onChange={handleChange}
                      error={Boolean(errors.status && touched.status)}
                    >
                      <MenuItem disabled value="">
                        Select status
                      </MenuItem>
                      <MenuItem value="Paid">Paid</MenuItem>
                      <MenuItem value="Unpaid">Unpaid</MenuItem>
                      <MenuItem value="Cancelled">Cancelled</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                {touched.status && errors.status && <FormHelperText error={true}>{errors.status}</FormHelperText>}
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Date</InputLabel>
                  <FormControl sx={{ width: '100%' }} error={Boolean(touched.date && errors.date)}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker format="dd/MM/yyyy" value={values.date} onChange={(newValue) => setFieldValue('date', newValue)} />
                    </LocalizationProvider>
                  </FormControl>
                </Stack>
                {touched.date && errors.date && <FormHelperText error={true}>{errors.date}</FormHelperText>}
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Due Date</InputLabel>
                  <FormControl sx={{ width: '100%' }} error={Boolean(touched.due_date && errors.due_date)}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        format="dd/MM/yyyy"
                        value={values.due_date}
                        onChange={(newValue) => setFieldValue('due_date', newValue)}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </Stack>
                {touched.due_date && errors.due_date && <FormHelperText error={true}>{errors.due_date}</FormHelperText>}
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <MainCard sx={{ minHeight: 168 }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 8 }}>
                      <Stack sx={{ gap: 2 }}>
                        <Typography variant="h5">From:</Typography>
                        <Stack sx={{ width: 1 }}>
                          <Typography variant="subtitle1">{values?.cashierInfo?.name}</Typography>
                          <Typography color="secondary">{values?.cashierInfo?.address}</Typography>
                          <Typography color="secondary">{values?.cashierInfo?.phone}</Typography>
                          <Typography color="secondary">{values?.cashierInfo?.email}</Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Box textAlign={{ xs: 'left', sm: 'right' }} color="grey.200">
                        <Button
                          variant="outlined"
                          startIcon={<EditOutlined />}
                          color="secondary"
                          onClick={() => handlerCustomerFrom(true)}
                          size="small"
                        >
                          Change
                        </Button>
                        <AddressModal
                          open={invoiceMaster.open}
                          setOpen={(value) => handlerCustomerFrom(value)}
                          handlerAddress={(address) => setFieldValue('cashierInfo', address)}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </MainCard>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <MainCard sx={{ minHeight: 168 }}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 8 }}>
                      <Stack sx={{ gap: 2 }}>
                        <Typography variant="h5">To:</Typography>
                        <Stack sx={{ width: 1 }}>
                          <Typography variant="subtitle1">{values?.customerInfo?.name}</Typography>
                          <Typography color="secondary">{values?.customerInfo?.address}</Typography>
                          <Typography color="secondary">{values?.customerInfo?.phone}</Typography>
                          <Typography color="secondary">{values?.customerInfo?.email}</Typography>
                        </Stack>
                      </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <Box textAlign="right" color="grey.200">
                        <Button
                          size="small"
                          startIcon={<PlusOutlined />}
                          color="secondary"
                          variant="outlined"
                          onClick={() => handlerCustomerTo(true)}
                        >
                          Add
                        </Button>
                        <AddressModal
                          open={invoiceMaster.isCustomerOpen}
                          setOpen={(value) => handlerCustomerTo(value)}
                          handlerAddress={(value) => setFieldValue('customerInfo', value)}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </MainCard>
                {touched.customerInfo && errors.customerInfo && <FormHelperText error={true}>{errors?.customerInfo?.name}</FormHelperText>}
              </Grid>

              <Grid size={12}>
                <Typography variant="h5">Detail</Typography>
              </Grid>
              <Grid size={12}>
                <FieldArray
                  name="invoice_detail"
                  render={({ remove, push }) => {
                    return (
                      <>
                        <TableContainer>
                          <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                              <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="center">Action</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {values?.invoice_detail?.map((item, index) => (
                                <TableRow key={item.id}>
                                  <TableCell>{values?.invoice_detail.indexOf(item) + 1}</TableCell>
                                  <InvoiceItem
                                    key={item.id}
                                    id={item.id}
                                    index={index}
                                    name={item.name}
                                    description={item.description}
                                    qty={item.qty}
                                    price={item.price}
                                    onDeleteItem={(index) => remove(index)}
                                    onEditItem={handleChange}
                                    Blur={handleBlur}
                                    errors={errors}
                                    touched={touched}
                                  />
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Divider />
                        {touched.invoice_detail && errors.invoice_detail && !Array.isArray(errors?.invoice_detail) && (
                          <Stack direction="row" sx={{ justifyContent: 'center', p: 1.5 }}>
                            <FormHelperText error={true}>{errors.invoice_detail}</FormHelperText>
                          </Stack>
                        )}
                        <Grid container justifyContent="space-between">
                          <Grid size={{ xs: 12, md: 8 }}>
                            <Box sx={{ pt: 2.5, pr: 2.5, pb: 2.5, pl: 0 }}>
                              <ItemAdd push={push} />
                            </Box>
                          </Grid>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <Grid container justifyContent="space-between" spacing={2} sx={{ pt: 2.5, pb: 2.5 }}>
                              <Grid size={6}>
                                <Stack sx={{ gap: 1 }}>
                                  <InputLabel>Discount(%)</InputLabel>
                                  <TextField
                                    type="number"
                                    fullWidth
                                    name="discount"
                                    id="discount"
                                    placeholder="0.0"
                                    value={values.discount}
                                    onChange={handleChange}
                                    slotProps={{ htmlInput: { min: 0 } }}
                                  />
                                </Stack>
                              </Grid>
                              <Grid size={6}>
                                <Stack sx={{ gap: 1 }}>
                                  <InputLabel>Tax(%)</InputLabel>
                                  <TextField
                                    type="number"
                                    fullWidth
                                    name="tax"
                                    id="tax"
                                    placeholder="0.0"
                                    value={values.tax}
                                    onChange={handleChange}
                                    slotProps={{ htmlInput: { min: 0 } }}
                                  />
                                </Stack>
                              </Grid>
                            </Grid>
                            <Grid size={12}>
                              <Stack sx={{ gap: 2 }}>
                                <Stack direction="row" justifyContent="space-between">
                                  <Typography color="secondary">Sub Total:</Typography>
                                  <Typography>{`${invoiceMaster?.country?.prefix ?? ''} ${subtotal.toFixed(2)}`}</Typography>
                                </Stack>
                                <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                                  <Typography color="secondary">Discount:</Typography>
                                  <Typography variant="h6" color={'success.main'}>
                                    {`${invoiceMaster?.country?.prefix ?? ''} ${discountRate.toFixed(2)}`}
                                  </Typography>
                                </Stack>
                                <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                                  <Typography color="secondary">Tax:</Typography>
                                  <Typography>{`${invoiceMaster?.country?.prefix ?? ''} ${taxRate.toFixed(2)}`}</Typography>
                                </Stack>
                                <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                                  <Typography variant="subtitle1">Grand Total:</Typography>
                                  <Typography variant="subtitle1">
                                    {total % 1 === 0
                                      ? (invoiceMaster.country?.prefix ?? '') + ' ' + total
                                      : (invoiceMaster.country?.prefix ?? '') + ' ' + total.toFixed(2)}
                                  </Typography>
                                </Stack>
                              </Stack>
                            </Grid>
                          </Grid>
                        </Grid>
                      </>
                    );
                  }}
                />
              </Grid>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Notes</InputLabel>
                  <TextField
                    placeholder="Address"
                    rows={3}
                    value={values.notes}
                    multiline
                    name="notes"
                    onChange={handleChange}
                    helperText={`${values.notes.length} / ${notesLimit}`}
                    sx={{
                      width: '100%',
                      '& .MuiFormHelperText-root': {
                        mr: 0,
                        display: 'flex',
                        justifyContent: 'flex-end'
                      }
                    }}
                    slotProps={{ htmlInput: { maxLength: notesLimit } }}
                  />
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Stack sx={{ gap: 1 }}>
                  <InputLabel>Set Currency*</InputLabel>
                  <FormControl sx={{ width: { xs: '100%', sm: 250 } }}>
                    <Autocomplete
                      id="country-select"
                      options={invoiceMaster.countries}
                      defaultValue={invoiceMaster.country}
                      getOptionLabel={(option) => option.label}
                      // Controlled value for the Autocomplete
                      value={values.country || null}
                      autoHighlight
                      clearIcon={null}
                      onChange={(event, value) => {
                        setFieldValue('country', value); // Update Formik state
                        selectCountry(value);
                      }}
                      renderOption={({ key, ...props }, option) => (
                        <Stack key={key} component="li" direction="row" sx={{ gap: 1, alignItems: 'center' }} {...props}>
                          {option.code && (
                            <CardMedia
                              component="img"
                              loading="lazy"
                              className="flagImg"
                              sx={{ width: 20, height: 14 }}
                              alt={`${option.code.toLowerCase()}.png`}
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            />
                          )}
                          {option.label}
                        </Stack>
                      )}
                      renderInput={(params) => {
                        const selected = invoiceMaster.countries.find((option) => option.code === values.country?.code);
                        return (
                          <TextField
                            {...params}
                            name="country"
                            placeholder="Select"
                            // Controlled value for the TextField
                            value={values.country ? values.country.label : ''}
                            error={touched.country && Boolean(errors.country)}
                            helperText={
                              touched.country &&
                              (Array.isArray(errors.country)
                                ? errors.country.join(', ')
                                : typeof errors.country === 'string' && errors.country)
                            }
                            sx={{ '.flagImg': { objectFit: 'contain' } }}
                            slotProps={{
                              input: {
                                ...params.InputProps,
                                startAdornment: (
                                  <>
                                    {selected && selected.code && (
                                      <CardMedia
                                        component="img"
                                        style={{ marginRight: 6 }}
                                        loading="lazy"
                                        sx={{ width: 20, height: 14 }}
                                        className="flagImg"
                                        alt={`${selected.code.toLowerCase()}.png`}
                                        src={`https://flagcdn.com/w20/${selected.code.toLowerCase()}.png`}
                                      />
                                    )}
                                  </>
                                )
                              }
                            }}
                          />
                        );
                      }}
                    />
                  </FormControl>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Stack direction="row" sx={{ gap: 2, alignItems: 'flex-end', justifyContent: 'flex-end', height: 1 }}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    disabled={!isValid}
                    sx={{
                      '&:disabled:hover': {
                        color: 'secondary.light',
                        bgcolor: 'secondary.200',
                        borderColor: 'secondary.light'
                      },
                      '&:disabled': {
                        boxShadow: 'none',
                        '&:after': {
                          boxShadow: 'none'
                        }
                      },
                      color: 'secondary.dark'
                    }}
                    onClick={() => handlerPreview(true)}
                  >
                    Preview
                  </Button>
                  <Button color="primary" variant="contained" type="submit">
                    Update & Send
                  </Button>
                  <InvoiceModal
                    isOpen={invoiceMaster.isOpen}
                    invoiceMaster={invoiceMaster}
                    setIsOpen={(value) => handlerPreview(value)}
                    key={values.invoice_id}
                    invoiceInfo={{
                      ...values,
                      subtotal,
                      taxRate,
                      discountRate,
                      total
                    }}
                    items={values?.invoice_detail}
                    onAddNextInvoice={() => handlerPreview(false)}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

// ==============================|| INVOICE - EDIT ||============================== //

export default function InvoiceEdit() {
  const { id } = useParams();

  const { invoiceLoading, invoice } = useGetInvoice();
  const { invoiceMaster, invoiceMasterLoading } = useGetInvoiceMaster();
  const [list, seList] = useState(null);

  useEffect(() => {
    if (id && !invoiceLoading) {
      seList(invoice.filter((item) => item.id.toString() === id)[0]);
    }
  }, [id, invoice, invoiceLoading]);

  const loader = (
    <Box sx={{ height: 'calc(100vh - 310px)' }}>
      <CircularLoader />
    </Box>
  );

  let breadcrumbLinks = [{ title: 'home', to: APP_DEFAULT_PATH }, { title: 'invoice', to: '/apps/invoice/dashboard' }, { title: 'edit' }];

  const isLoader = invoiceLoading || invoiceMasterLoading || invoiceMaster === undefined || list === null;

  return (
    <>
      <Breadcrumbs custom heading="edit-invoice" links={breadcrumbLinks} />
      <MainCard>{isLoader ? loader : <EditForm {...{ list: list, invoiceMaster }} />}</MainCard>
    </>
  );
}

ItemAdd.propTypes = { push: PropTypes.func };

EditForm.propTypes = { list: PropTypes.any, invoiceMaster: PropTypes.any };

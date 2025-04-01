import Layout from "../../components/layout/layout.jsx";
import {
    AlertTitle,
    Box,
    Button, CircularProgress,
    Container,
    Grid,
    InputLabel,
    LinearProgress,
    OutlinedInput,
    Typography,
    Card,
    CardContent, Alert, FormControl, FormHelperText
} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";
import {CONSIGNMENT_ACTION_CREATORS, selectConsignments} from "../../redux/features/consignment/consignment-slice.js";
import {useDispatch, useSelector} from "react-redux";
import VaultInfo from "../../components/shared/vault-info.jsx";

const ConsignmentPage = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            consignments_serial_numbers: '',
            vault_number: '',
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {
            dispatch(CONSIGNMENT_ACTION_CREATORS.getConsignment({...values, resetForm, setSubmitting}));
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            consignments_serial_numbers: yup.string().required('consignment number required'),
            vault_number: yup.string().required('vault number required'),
        })
    });

    const {consignmentLoading, consignmentError, consignment} = useSelector(selectConsignments);

    return (
        <Layout>
            <Box sx={{py: 8}}>
                <Container>
                    <Grid container={true} justifyContent="center" alignItems="center">
                        <Grid size={{xs: 12, md: 6, lg: 4}}>

                            <Card
                                sx={{
                                    borderTopRightRadius: 16,
                                    borderBottomRightRadius: 0,
                                    borderBottomLeftRadius: 16,
                                    borderTopLeftRadius: 0
                                }}>
                                {consignmentLoading && <LinearProgress variant="query" color="secondary"/>}
                                <CardContent>
                                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                                        <Box>
                                            {consignmentError && (
                                                <Alert
                                                    sx={{
                                                        borderTopRightRadius: 16,
                                                        borderBottomRightRadius: 0,
                                                        borderBottomLeftRadius: 16,
                                                        borderTopLeftRadius: 0,
                                                        mb: 4
                                                    }} severity="error">
                                                    <AlertTitle>{consignmentError}</AlertTitle>
                                                </Alert>
                                            )}

                                            <Typography
                                                align="center"
                                                mb={2} variant="h5"
                                                sx={{color: 'text.primary'}}>
                                                Welcome
                                            </Typography>

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                                    Consignment Number
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel
                                                        htmlFor="consignments_serial_numbers">Consignment
                                                        Number</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        value={formik.values.consignments_serial_numbers}
                                                        id="consignments_serial_numbers"
                                                        name="consignments_serial_numbers"
                                                        type="text"
                                                        error={formik.touched.consignments_serial_numbers && formik.errors.consignments_serial_numbers}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter consignments serial numbers"
                                                        required={true}
                                                        label="Consignment Number"
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.consignments_serial_numbers && formik.errors.consignments_serial_numbers && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.consignments_serial_numbers}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                                    Vault Number
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="vault_number">Vault Number</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        id="vault_number"
                                                        value={formik.values.vault_number}
                                                        name="vault_number"
                                                        type={'text'}
                                                        error={formik.touched.vault_number && formik.errors.vault_number}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter vault number"
                                                        required={true}
                                                        label="Vault Number"
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.vault_number && formik.errors.vault_number && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.vault_number}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>


                                            <Button
                                                type="submit"
                                                size="large"
                                                color="secondary"
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    py: 1.2,
                                                    borderTopRightRadius: 16,
                                                    borderBottomRightRadius: 0,
                                                    borderBottomLeftRadius: 16,
                                                    borderTopLeftRadius: 0,
                                                }}
                                                fullWidth={true}
                                                loadingPosition="start"
                                                startIcon={consignmentLoading ?
                                                    <CircularProgress color="secondary"/> : null}
                                                variant="contained"
                                                disableElevation={true}>
                                                {consignmentLoading ? 'Loading consignment...' : 'Submit'}
                                            </Button>
                                        </Box>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>


                    <Box
                        sx={{
                            mt: 4,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                        {consignment && !consignmentLoading && !consignmentError ? (
                            <VaultInfo consignment={consignment}/>
                        ) : (
                            <Typography variant="h6" color="text.secondary">
                                No consignment data available.
                            </Typography>
                        )}
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default ConsignmentPage;
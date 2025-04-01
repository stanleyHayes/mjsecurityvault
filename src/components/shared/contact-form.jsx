import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";
import {CallOutlined, CloseOutlined, CommentOutlined, MailOutlined, Person2Outlined} from "@mui/icons-material";

const ContactForm = () => {

    const formik = useFormik({
        initialValues: {name: "", email: "", phone: "", message: ""},
        validationSchema: yup.object().shape({
            name: yup.string().required("Field required"),
            email: yup.string().email("Enter valid email").required("Field required"),
            phone: yup.string().required("Field required"),
            message: yup.string().required("Field required"),
        })
    });

    return (
        <Card
            variant="elevation"
            sx={{borderRadius: 8, backgroundColor: "background.paper"}}
            elevation={0}>
            <CardContent>
                <form onSubmit={formik.handleSubmit}>
                    <Stack direction="column" spacing={2}>
                        <Typography
                            variant="h5"
                            sx={{color: "text.primary", fontWeight: 700, mb: 3,}}>
                            Send us a{" "}
                            <Typography
                                component="span"
                                variant="h5"
                                sx={{color: "secondary.main", fontWeight: 700, mb: 3,}}>
                                message
                            </Typography>
                        </Typography>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                Your name
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <OutlinedInput
                                    value={formik.values.name}
                                    placeholder="Your Name"
                                    name="name"
                                    color="primary"
                                    sx={{borderRadius: 2}}
                                    startAdornment={<Person2Outlined sx={{fontSize: 20, mr: 2}} color="secondary"/>}
                                    type="text"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.name && formik.errors.name)}
                                    fullWidth={true}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <FormHelperText>
                                        {formik.touched.name && formik.errors.name}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box>
                            <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                Email
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <OutlinedInput
                                    value={formik.values.email}
                                    placeholder="Your Email"
                                    name="email"
                                    sx={{borderRadius: 2}}
                                    startAdornment={<MailOutlined sx={{fontSize: 20, mr: 2}} color="secondary"/>}
                                    endAdornment={
                                        Boolean(formik.touched.email && formik.errors.email) && (
                                            <CloseOutlined color="error"/>
                                        )
                                    }
                                    type="email"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.email && formik.errors.email)}
                                    fullWidth={true}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <FormHelperText>
                                        {formik.touched.email && formik.errors.email}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box>
                            <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                Phone
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <OutlinedInput
                                    value={formik.values.phone}
                                    placeholder="Your Phone"
                                    name="phone"
                                    sx={{borderRadius: 2}}
                                    startAdornment={
                                    <CallOutlined sx={{fontSize: 20, mr: 2}} color="secondary"/>}
                                    type="tel"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.phone && formik.errors.phone)}
                                    fullWidth={true}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <FormHelperText>
                                        {formik.touched.phone && formik.errors.phone}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box>
                            <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                Message
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <OutlinedInput
                                    value={formik.values.message}
                                    placeholder="Your Message"
                                    name="message"
                                    sx={{borderRadius: 2}}
                                    startAdornment={<CommentOutlined sx={{fontSize: 20, mr: 2, verticalAlign: "top"}} color="secondary"/>}
                                    type="text"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.message && formik.errors.message)}
                                    fullWidth={true}
                                    multiline={true}
                                    rows={2}
                                />
                                {formik.touched.message && formik.errors.message && (
                                    <FormHelperText>
                                        {formik.touched.message && formik.errors.message}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>
                        <Button
                            type="submit"
                            fullWidth={true}
                            size="large"
                            disableElevation={true}
                            sx={{
                                textTransform: "capitalize",
                                color: "white",
                                borderRadius: 2,
                                fontWeight: 700,
                                backgroundColor: "secondary.main",
                            }}>
                            Send Message
                        </Button>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    )
}

export default ContactForm;
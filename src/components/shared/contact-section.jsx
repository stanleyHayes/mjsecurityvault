import {Box, Container, Grid, Link, Stack, Typography} from "@mui/material";
import {HomeOutlined, MailOutline, PhoneOutlined} from "@mui/icons-material";
import ContactForm from "./contact-form.jsx";
import Info from "./info.jsx";
import banner from "./../../assets/images/banner/contact-background.jpg";

const ContactSection = () => {
    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Box>
                    <Grid container={true} spacing={4} justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Box>
                                <Stack direction="column" spacing={4}>
                                    <Box>
                                        <Typography
                                            variant="h4"
                                            sx={{color: "text.primary", fontWeight: 700}}>
                                            Get In Touch{" "}
                                            <Typography
                                                component="span"
                                                variant="h4"
                                                sx={{
                                                    color: "secondary.main",
                                                    fontWeight: 700
                                                }}>
                                                With
                                            </Typography>
                                            {" "}Us
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography align="center" variant="body1" sx={{color: "text.secondary"}}>
                                            Whether you’re ready to reserve a vault, have questions about our
                                            services, or need urgent assistance — we’re here for you. Reach out
                                            to our team anytime and we’ll respond promptly and confidentially.
                                            Your security starts with a conversation.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Info
                                            icon={
                                                <HomeOutlined
                                                    sx={{
                                                        color: "icon.secondary",
                                                        padding: 1,
                                                        fontSize: 40,
                                                        borderRadius: "25%",
                                                        backgroundColor: "icon.secondaryBackground"
                                                    }}
                                                />
                                            }
                                            value={
                                                <Typography align="left" variant="body1" sx={{color: "text.secondary"}}>
                                                    Innovation House 410 Stafford Road Wolverhampton WV10 6AJ, United
                                                    Kingdom
                                                </Typography>
                                            }
                                            label={
                                                <Typography variant="body1" sx={{color: "text.primary"}}>
                                                    Our Location
                                                </Typography>
                                            }
                                        />
                                    </Box>
                                    <Box>
                                        <Info
                                            icon={
                                                <PhoneOutlined
                                                    sx={{
                                                        color: "icon.secondary",
                                                        padding: 1,
                                                        fontSize: 40,
                                                        borderRadius: "25%",
                                                        backgroundColor: "icon.secondaryBackground"
                                                    }}
                                                />
                                            }
                                            value={
                                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                                    +44 794 724 9060
                                                </Typography>
                                            }
                                            label={
                                                <Typography variant="body1" sx={{color: "text.primary"}}>
                                                    Phone Number
                                                </Typography>
                                            }
                                        />
                                    </Box>
                                    <Box>
                                        <Info
                                            icon={
                                                <MailOutline
                                                    sx={{
                                                        color: "icon.secondary",
                                                        padding: 1,
                                                        fontSize: 40,
                                                        borderRadius: "25%",
                                                        backgroundColor: "icon.secondaryBackground"
                                                    }}
                                                />
                                            }
                                            value={
                                                <Link href="mailto://info@jsecurityvault.com" underline="none">
                                                    <Typography variant="body1" sx={{color: "text.secondary"}}>
                                                        info@mjsecurityvault.com
                                                    </Typography>
                                                </Link>
                                            }
                                            label={
                                                <Typography variant="body1" sx={{color: "text.primary"}}>
                                                    Email Address
                                                </Typography>
                                            }
                                        />
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Box
                                sx={{
                                    backgroundImage: `${banner}`,
                                    height: "100%",
                                }}>
                                <ContactForm/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default ContactSection;
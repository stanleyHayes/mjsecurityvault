import {Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectFAQs} from "../../redux/features/faqs/faqs-slice";
import FAQ from "./faq.jsx";
import {Link as ScrollLink} from "react-scroll";

const FAQsSection = () => {

    const {faqs} = useSelector(selectFAQs);

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "text.primary", fontWeight: 700}}>
                            Answer to{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontWeight: 700}}>
                                FAQs
                            </Typography>
                            {" "}from our customers
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="body1" align="center" sx={{color: "text.secondary"}}>
                            We’re here to help every step of the way. Whether you have questions, need
                            assistance, or want to hear what others are saying, this section has everything to
                            guide and reassure you.
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={4} justifyContent="space-between">
                            <Grid size={{xs: 12, md: 5}}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{backgroundColor: "light.accent", borderRadius: 2}}>
                                    <CardContent>
                                        <Typography variant="h6" sx={{color: "text.primary", fontWeight: 700, mb: 2}}>
                                            Couldn't find an answer to your question?
                                        </Typography>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 4}}>
                                            Please leave a request and we will contact you shortly.
                                        </Typography>
                                        <ScrollLink
                                            to="contact"
                                            smooth={true}
                                            spy={true}
                                            offset={50}
                                            duration={500}
                                            delay={100}>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                disableElevation={true}
                                                sx={{
                                                    textTransform: "capitalize",
                                                    color: "white",
                                                    backgroundColor: "colors.footer",
                                                    fontWeight: 700
                                                }}>
                                                Get in Touch
                                            </Button>
                                        </ScrollLink>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid size={{xs: 12, md: 5}}>
                                <Box>
                                    <Stack
                                        sx={{width: "100%"}}
                                        spacing={2}
                                        divider={<Divider variant="fullWidth"/>}>
                                        {faqs.map((faq, index) => {
                                            return (
                                                <Box key={index}>
                                                    <FAQ faq={faq}/>
                                                </Box>
                                            )
                                        })}
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default FAQsSection;
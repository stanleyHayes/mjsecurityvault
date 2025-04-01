import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom";

const Banner = () => {

    return (
        <Box sx={{width: "100%", minHeight: "50vh", alignItems: "center", display: "flex"}}>
            <Container maxWidth="lg">
                <Grid container={true} spacing={4} alignItems="center" justifyContent="space-between">
                    <Grid size={{xs: 12}}>
                        <Box>
                            <Stack spacing={3}>
                                <Typography
                                    align="center"
                                    variant="h2"
                                    sx={{
                                        color: "text.primary",
                                        fontWeight: 800,
                                        fontSize: {xs: 40, md: 48, lg: 52}
                                    }}>
                                    Welcome to{" "}
                                </Typography>
                                <Stack justifyContent="center" direction={{xs: 'column', md: 'row'}} spacing={1}>
                                    <Typography
                                        align="center"
                                        component="span"
                                        variant="h2"
                                        sx={{
                                            color: "secondary.main",
                                            backgroundColor: "light.secondary",
                                            fontWeight: 800,
                                            px: 1,
                                            borderRadius: 2,
                                            fontSize: {xs: 40, md: 48, lg: 52}
                                        }}>
                                        MJ Security
                                    </Typography>
                                    {" "}
                                    <Typography
                                        align="center"
                                        component="span"
                                        variant="h2"
                                        sx={{
                                            color: "colors.accent",
                                            backgroundColor: "light.accent",
                                            fontWeight: 800,
                                            px: 1,
                                            borderRadius: 2,
                                            fontSize: {xs: 40, md: 48, lg: 52}
                                        }}>
                                        Vault
                                    </Typography>
                                </Stack>
                                <Typography align="center" variant="body1" sx={{color: "text.primary", mb: 2}}>
                                    Your Trusted Guardian of Valuables.
                                </Typography>
                                <Typography align="center" variant="body2" sx={{color: "text.secondary"}}>
                                    We provide ultra-secure vault storage for individuals and businesses. Whether you're
                                    storing priceless heirlooms, important documents, or rare collectibles, our facility
                                    combines cutting-edge technology, military-grade architecture, and complete privacy
                                    to ensure your peace of mind.
                                </Typography>
                                <Box>
                                    <Grid container={true} spacing={2} justifyContent="center">
                                        <Grid size={{xs: 12, md: 4}}>
                                            <ScrollLink
                                                to="contact"
                                                smooth={true}
                                                spy={true}
                                                offset={50}
                                                duration={500}
                                                delay={100}>
                                                <Button
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
                                                    Reserve a Vault
                                                </Button>
                                            </ScrollLink>
                                        </Grid>
                                        <Grid size={{xs: 12, md: 4}}>
                                            <ScrollLink
                                                to="plans"
                                                smooth={true}
                                                spy={true}
                                                offset={50}
                                                duration={500}
                                                delay={100}>
                                                <Button
                                                    variant="outlined"
                                                    fullWidth={true}
                                                    size="large"
                                                    disableElevation={true}
                                                    sx={{
                                                        textTransform: "capitalize",
                                                        color: "secondary.main",
                                                        borderRadius: 2,
                                                        fontWeight: 700,
                                                        borderColor: "secondary.main",
                                                        borderWidth: 2,
                                                    }}>
                                                    See Plans
                                                </Button>
                                            </ScrollLink>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner;
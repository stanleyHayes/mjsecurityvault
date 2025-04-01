import {Box, Button, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import Service from "./service.jsx";
import {LightModeOutlined, NorthEastOutlined} from "@mui/icons-material";
import {MJ_SECURITY_VAULT_DATA} from "../../utils/data.js";

const ServicesSection = () => {

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "text.primary", fontWeight: 700}}>
                            Our{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontWeight: 700}}>
                                Security
                            </Typography>
                            {" "}Services
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true}>
                            <Grid xs={12} md={8}>
                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                    From personal vaults to custom business solutions, we offer secure, discreet, and
                                    flexible storage options tailored to your needs. Explore our full range of services
                                    and rental plans.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={4} justifyContent="space-between">
                            <Grid size={{xs: 12, md: 8}}>
                                <Grid container={true} spacing={2}>
                                    {MJ_SECURITY_VAULT_DATA.SERVICES.map((service, index) => {
                                        return (
                                            <Grid key={index} size={{xs: 12, md: 6}}>
                                                <Service
                                                    backgroundColor={index === 0 ? `light.accent` : 'light.secondary'}
                                                    icon={
                                                        <LightModeOutlined
                                                            sx={{
                                                                color: index === 0 ? `colors.accent` : 'colors.secondary',
                                                                padding: 1,
                                                                fontSize: 32,
                                                                borderRadius: "10%",
                                                                backgroundColor: index === 0 ? "icon.accentBackground" : "icon.secondaryBackground",
                                                            }}
                                                        />
                                                    }
                                                    title={service.title}
                                                    description={service.description}
                                                />
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                            <Grid size={{xs: 12, md: 4}}>
                                <Box>
                                    <Stack
                                        sx={{width: "100%"}}
                                        spacing={2}
                                        divider={<Divider sx={{py: 1}} variant="fullWidth"/>}>
                                        {MJ_SECURITY_VAULT_DATA.KEY_FEATURES.map((feature, index) => {
                                            return (
                                                <Button
                                                    key={index}
                                                    fullWidth={true}
                                                    endIcon={
                                                        <NorthEastOutlined
                                                            sx={{
                                                                color: "secondary.main",
                                                                fontSize: 32
                                                            }}
                                                        />
                                                    }
                                                    variant="text"
                                                    sx={{
                                                        color: "text.primary",
                                                        textTransform: "none",
                                                        justifyContent: "space-between"
                                                    }}>
                                                    {feature}
                                                </Button>
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

export default ServicesSection;
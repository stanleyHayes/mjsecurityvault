import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {MJ_SECURITY_VAULT_DATA} from "../../utils/data.js";
import CoreValue from "./core-value.jsx";

const CoreValueSection = () => {

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "colors.accent", fontWeight: 700}}>
                            Core{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontWeight: 700}}>
                                Values
                            </Typography>
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="body1" sx={{color: "text.secondary"}}>
                            At the heart of MJ Security Vault is a commitment to principles that guide every
                            decision we make and every service we offer. Our core values reflect our promise to
                            protect, respect, and innovate for our clients every single day.
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2}>
                            {MJ_SECURITY_VAULT_DATA.CORE_VALUES.map((value, index) => {
                                return (
                                    <Grid key={index} size={{xs: 12, md: 6, lg: 3}}>
                                        <CoreValue
                                            title={value.title}
                                            description={value.description}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default CoreValueSection;
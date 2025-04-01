import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {TrendingFlatOutlined} from "@mui/icons-material";
import {MJ_SECURITY_VAULT_DATA} from "../../utils/data";
import Staff from "./staff.jsx";

const TeamSection = () => {
    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "text.primary", fontWeight: 700}}>
                            We employ only{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontWeight: 700}}>
                                professionals in their field
                            </Typography>
                        </Typography>
                    </Box>

                    <Box>
                        <Typography align="center" variant="body1" sx={{color: "text.secondary"}}>
                            We have a permanent team. We constantly train our employees and supervise their
                            work. We appreciate their decency, ability to work quickly and accurately.
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2}>
                            {MJ_SECURITY_VAULT_DATA.STAFF.map((staff, index) => {
                                return (
                                    <Grid key={index} size={{xs: 12, md: 4, lg: 2}}>
                                        <Staff staff={staff}/>
                                    </Grid>
                                )
                            })}
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
                                <Stack
                                    sx={{height: "100%"}} direction="row" alignItems="center"
                                    justifyContent="center">
                                    <TrendingFlatOutlined
                                        sx={{
                                            color: "icon.secondary",
                                            padding: 1,
                                            fontSize: 80,
                                            borderRadius: "100%",
                                            backgroundColor: "icon.secondaryBackground"
                                        }}
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default TeamSection;
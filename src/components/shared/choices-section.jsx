import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {
    GroupOutlined,
    LightModeOutlined,
    PixOutlined,
    WorkspacePremiumOutlined,
    WorkspacesOutlined
} from "@mui/icons-material";
import {Link} from "react-router-dom";
import Choice from "./choice.jsx";
import {MJ_SECURITY_VAULT_DATA} from "../../utils/data.js";
import Service from "./service.jsx";

const ChoicesSection = () => {

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "text.primary", fontWeight: 700}}>
                            Reasons to{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontWeight: 700}}>
                                choose
                            </Typography>
                            {" "}us
                        </Typography>
                    </Box>

                    <Box>
                        <Typography align="center" variant="body1" sx={{color: "text.secondary"}}>
                            Our commitment to protection goes beyond locks and cameras. Discover the high-tech
                            systems and multi-layered defenses that make MJ Security Vault one of the safest
                            storage solutions on the continent.
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2}>
                            {MJ_SECURITY_VAULT_DATA.REASONS_TO_CHOOSE.map((choice, index) => {
                                return (
                                    <Grid key={index} size={{xs: 12, md: 6, lg: 4}}>
                                        <Choice
                                            title={choice.title}
                                            description={choice.description}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2} justifyContent="center">
                            <Grid size={{xs: 12, md: 3}}>
                                <Link to="/contact" style={{textDecoration: "none", width: "100%", display: "block"}}>
                                    <Button
                                        fullWidth={true}
                                        variant="outlined"
                                        size="large"
                                        sx={{
                                            textTransform: "capitalize",
                                            color: "colors.accent",
                                            borderRadius: 2,
                                            borderWidth: 2,
                                            borderColor: "colors.accent",
                                            borderStyle: "solid",
                                            fontWeight: 700
                                        }}>
                                        Contact Us
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default ChoicesSection;
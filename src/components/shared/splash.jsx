import {Box, CardMedia, CircularProgress, Container, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

const Splash = () => {
    return (
        <Box sx={{maxHeight: "100vh", height: "100vh", display: "flex", alignItems: "center"}}>
            <Container>
                <Stack spacing={3} justifyContent="center">
                    <Box>
                        <Typography
                            variant="h4"
                            align="center"
                            sx={{
                                textTransform: "uppercase",
                                color: "secondary.main",
                                fontWeight: 700,
                                mb: 3
                            }}>
                            MJ Security Vault
                        </Typography>

                        <Typography
                            variant="body1"
                            align="center"
                            sx={{
                                color: "secondary.main"
                            }}>
                            Your Trusted Guardian of Valuables.
                        </Typography>
                    </Box>
                    <Box>
                        <Stack direction="column" spacing={3} alignItems="center">

                            <Link to="/" style={{textDecoration: "none"}}>
                                <CardMedia
                                    component="img"
                                    sx={{width: 70, height: 70, objectFit: "cover"}}
                                    src={logo}
                                />
                            </Link>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack justifyContent="center" direction="row" spacing={3}>
                            <CircularProgress variant="indeterminate" color="secondary" size={50}/>
                        </Stack>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            align="center"
                            sx={{
                                textTransform: "none",
                                color: "secondary.main",
                                letterSpacing: 1.4,
                                fontWeight: 700
                            }}>
                            Setting up. Please wait...
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Splash;
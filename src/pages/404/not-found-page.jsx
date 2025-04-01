import Layout from "../../components/layout/layout.jsx";
import {Box, Button, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import {NorthEast} from "@mui/icons-material";

const NotFoundPage = () => {


    return (
        <Layout>
            <Box
                sx={{
                    backgroundColor: "background.default",
                    minHeight: "93vh",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex"
                }}>
                <Container>
                    <Stack spacing={2}>
                        <Box>
                            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                                <Typography variant="h1" sx={{color: "secondary.main"}}>
                                    4
                                </Typography>
                                <Link to="/" style={{textDecoration: "none"}}>
                                    <CardMedia
                                        component="img"
                                        sx={{width: 70, height: 70, objectFit: "cover"}}
                                        src={logo}
                                    />
                                </Link>
                                <Typography variant="h1" sx={{color: "secondary.main"}}>
                                    4
                                </Typography>
                            </Stack>
                        </Box>
                        <Box>
                            <Typography
                                align="center"
                                variant="h2" sx={{color: "text.primary", fontWeight: 800}}>
                                <Typography
                                    component="span"
                                    variant="h4"
                                    sx={{
                                        color: "colors.accent",
                                        backgroundColor: "light.accent",
                                        fontWeight: 800,
                                        px: 1,
                                        borderRadius: 2
                                    }}>
                                    OOPs,
                                </Typography>
                                {" "}
                                <Typography
                                    component="span"
                                    variant="h4"
                                    sx={{
                                        color: "secondary.main",
                                        backgroundColor: "light.secondary",
                                        fontWeight: 800,
                                        px: 1,
                                        borderRadius: 2
                                    }}>
                                    something went wrong
                                </Typography>
                            </Typography>
                        </Box>
                        <Box>
                            <Grid container={true} alignItems="center" justifyContent="center">
                                <Grid item={true} xs={12} md={3}>
                                    <Link to="/" style={{textDecoration: "none"}}>
                                        <Button
                                            fullWidth={true}
                                            type="submit"
                                            size="large"
                                            disableElevation={true}
                                            endIcon={
                                                <NorthEast
                                                    sx={{
                                                        color: "white",
                                                        "&:hover": {
                                                            color: "secondary.main",
                                                            transition: "all 500ms ease-out"
                                                        }
                                                    }}
                                                />
                                            }
                                            sx={{
                                                textTransform: "capitalize",
                                                color: "white",
                                                fontWeight: 700,
                                                backgroundColor: "secondary.main",
                                                "&:hover": {
                                                    backgroundColor: "light.secondary",
                                                    color: "secondary.main",
                                                    transition: "all 500ms ease-out"
                                                }
                                            }}>
                                            Go back home
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </Layout>
    )
}

export default NotFoundPage;
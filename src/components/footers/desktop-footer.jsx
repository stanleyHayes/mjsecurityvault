import {Box, CardMedia, Grid, Link as MUILink, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {
    CallOutlined,
    Facebook,
    Instagram,
    LocationOnOutlined,
    MailOutline,
    Twitter,
    YouTube
} from "@mui/icons-material";
import logo from "../../assets/images/logo/logo.png";
import NavLink from "../shared/nav-link.jsx";
import NavigationLink from "../shared/navigation-link.jsx";

const DesktopFooter = () => {

    return (
        <Box>
            <Grid container={true} spacing={4}>
                <Grid size={{lg: 4}}>
                    <Stack spacing={3}>
                        <Box>
                            <Stack direction="column" spacing={3} alignItems="center">
                                <Link to="/" style={{textDecoration: "none"}}>
                                    <CardMedia
                                        component="img"
                                        sx={{width: 200, height: 200, objectFit: "cover"}}
                                        src={logo}
                                    />
                                </Link>
                            </Stack>
                        </Box>
                    </Stack>
                </Grid>
                <Grid size={{lg: 4}}>
                    <Stack spacing={1}>
                        <Typography variant="body1" sx={{color: "text.primary"}}>
                            Main
                        </Typography>
                        <NavLink path="/" label="Home"/>
                        <NavigationLink path="us" label="About Us"/>
                        <NavigationLink path="services" label="Services"/>
                        <NavigationLink path="plans" label="Payment Plans"/>
                        <NavigationLink path="contact" label="Contact"/>
                        <NavigationLink path="reviews" label="Testimonials"/>
                    </Stack>
                </Grid>
                <Grid size={{lg: 4}}>
                    <Box>
                        <Stack spacing={2}>
                            <Typography align="left" variant="body1" sx={{color: "text.primary"}}>
                                Contact
                            </Typography>
                            <Box>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <CallOutlined
                                        sx={{
                                            color: "icon.secondary",
                                            fontSize: 24,
                                            cursor: "pointer",
                                            padding: 0.4
                                        }}
                                    />
                                    <MUILink href="tel://+447947249060" style={{textDecoration: "none"}}>
                                        <Typography variant="body1" sx={{color: "text.secondary"}}>
                                            +44 794 724 9060
                                        </Typography>
                                    </MUILink>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <LocationOnOutlined
                                        sx={{
                                            color: "icon.secondary",
                                            fontSize: 24,
                                            cursor: "pointer",
                                            padding: 0.4
                                        }}
                                    />
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <Typography
                                            variant="body1"
                                            sx={{color: "text.secondary"}}>
                                            Innovation House 410 Stafford Road Wolverhampton WV10 6AJ, United Kingdom
                                        </Typography>
                                    </MUILink>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <MailOutline
                                        sx={{
                                            color: "icon.secondary",
                                            fontSize: 24,
                                            cursor: "pointer",
                                            padding: 0.4
                                        }}
                                    />
                                    <MUILink href="mailto://info@mjsecurityvault.com" style={{textDecoration: "none"}}>
                                        <Typography
                                            variant="body1"
                                            sx={{color: "text.secondary"}}>
                                            info@mjsecurityvault.com
                                        </Typography>
                                    </MUILink>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction="row" spacing={3} alignItems="center">
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <Instagram
                                            sx={{
                                                color: "icon.secondary",
                                                fontSize: 24,
                                                cursor: "pointer",
                                                padding: 0.4
                                            }}
                                        />
                                    </MUILink>
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <Facebook
                                            sx={{
                                                color: "icon.secondary",
                                                fontSize: 24,
                                                cursor: "pointer",
                                                padding: 0.4
                                            }}
                                        />
                                    </MUILink>
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <YouTube
                                            sx={{
                                                color: "icon.secondary",
                                                fontSize: 24,
                                                cursor: "pointer",
                                                padding: 0.4
                                            }}
                                        />
                                    </MUILink>
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <Twitter
                                            sx={{
                                                color: "icon.secondary",
                                                fontSize: 24,
                                                cursor: "pointer",
                                                padding: 0.4
                                            }}
                                        />
                                    </MUILink>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DesktopFooter;
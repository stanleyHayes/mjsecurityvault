import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    CardMedia,
    Link as MUILink,
    Stack,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import {
    CallOutlined,
    Facebook,
    Instagram,
    LocationOnOutlined,
    MailOutline,
    South,
    Twitter,
    YouTube
} from "@mui/icons-material";
import logo from "../../assets/images/logo/logo.png";
import NavLink from "../shared/nav-link.jsx";
import NavigationLink from "../shared/navigation-link.jsx";

const MobileFooter = () => {
    return (
        <Box>
            <Stack spacing={1}>
                <Accordion
                    elevation={0}
                    square={true}
                    sx={{backgroundColor: "background.paper"}}>
                    <AccordionSummary sx={{backgroundColor: "background.paper"}} expandIcon={<South
                        sx={{
                            color: "icon.secondary",
                            fontSize: 24,
                            padding: 0.4,
                            borderRadius: "100%",
                        }}
                    />}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: "text.primary",
                                fontWeight: 700
                            }}>
                            MJ Security Vault
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: "background.paper"}}>
                        <Stack direction="row" spacing={3} alignItems="center">
                            <Link to="/" style={{textDecoration: "none"}}>
                                <CardMedia
                                    component="img"
                                    sx={{width: 70, height: 70, objectFit: "cover"}}
                                    src={logo}
                                />
                            </Link>
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    elevation={0}
                    square={true}
                    sx={{backgroundColor: "background.paper"}}>
                    <AccordionSummary sx={{backgroundColor: "background.paper"}} expandIcon={<South
                        sx={{
                            color: "icon.secondary",
                            fontSize: 24,
                            padding: 0.4,
                            borderRadius: "100%",
                        }}
                    />}>
                        <Typography variant="body1" sx={{color: "text.primary"}}>
                            Main
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: "background.paper"}}>
                        <Stack spacing={2}>
                            <NavLink path="/" label="Home"/>
                            <NavigationLink path="us" label="About Us"/>
                            <NavigationLink path="services" label="Services"/>
                            <NavigationLink path="plans" label="Payment Plans"/>
                            <NavigationLink path="contact" label="Contact"/>
                            <NavigationLink path="reviews" label="Testimonials"/>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    elevation={0}
                    square={true} sx={{backgroundColor: "background.paper"}}>
                    <AccordionSummary
                        sx={{backgroundColor: "background.paper"}}
                        expandIcon={
                            <South
                                sx={{
                                    color: "icon.secondary",
                                    fontSize: 24,
                                    padding: 0.4,
                                    borderRadius: "100%",
                                }}
                            />}>
                        <Typography variant="body1" sx={{color: "text.primary"}}>
                            Contacts
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: "background.paper"}}>
                        <Stack spacing={2}>
                            <Box>
                                <Stack direction="row" spacing={4} alignItems="center">
                                    <CallOutlined
                                        sx={{
                                            color: "icon.secondary",
                                            fontSize: 24,
                                            padding: 0.4,
                                            cursor: "pointer"
                                        }}
                                    />
                                    <MUILink href="tel://+447947249060" style={{textDecoration: "none"}}>
                                        <Typography variant="body2" sx={{color: "text.secondary"}}>
                                            +44 794 724 9060
                                        </Typography>
                                    </MUILink>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction="row" spacing={4} alignItems="center">
                                    <LocationOnOutlined
                                        sx={{
                                            color: "icon.secondary",
                                            fontSize: 24,
                                            padding: 0.4,
                                            cursor: "pointer"
                                        }}
                                    />
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <Typography
                                            variant="body2"
                                            sx={{color: "text.secondary"}}>
                                            Innovation House 410 Stafford Road Wolverhampton WV10 6AJ, United Kingdom
                                        </Typography>
                                    </MUILink>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction="row" spacing={4} alignItems="center">
                                    <MailOutline
                                        sx={{
                                            color: "icon.secondary",
                                            fontSize: 24,
                                            padding: 0.4,
                                            cursor: "pointer"
                                        }}
                                    />
                                    <MUILink href="mailto://info@mjsecurityvault.com" underline="none">
                                        <Typography
                                            variant="body2"
                                            sx={{color: "text.secondary"}}>
                                            info@mjsecurityvault.com
                                        </Typography>
                                    </MUILink>
                                </Stack>
                            </Box>

                            <Box>
                                <Stack direction="row" spacing={4} alignItems="center">
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <Instagram
                                            sx={{
                                                color: "icon.secondary",
                                                fontSize: 24,
                                                padding: 0.4,
                                                cursor: "pointer"
                                            }}
                                        />
                                    </MUILink>
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <Facebook
                                            sx={{
                                                color: "icon.secondary",
                                                fontSize: 24,
                                                padding: 0.4,
                                                cursor: "pointer"
                                            }}
                                        />
                                    </MUILink>
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <YouTube
                                            sx={{
                                                color: "icon.secondary",
                                                fontSize: 24,
                                                padding: 0.4,
                                                cursor: "pointer"
                                            }}
                                        />
                                    </MUILink>
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <Twitter
                                            sx={{
                                                color: "icon.secondary",
                                                fontSize: 24,
                                                padding: 0.4,
                                                cursor: "pointer"
                                            }}
                                        />
                                    </MUILink>
                                </Stack>
                            </Box>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Box>
    )
}

export default MobileFooter;
import {Box, Button, CardMedia, Divider, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import NavigationLink from "./navigation-link.jsx";
import {AnimatePresence, motion} from "framer-motion";
import {CloseOutlined, DarkModeOutlined, LightModeOutlined} from "@mui/icons-material";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import logo from "../../assets/images/logo/logo.png";
import NavLink from "./nav-link.jsx";

const DrawerContent = () => {

    const {theme} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box sx={{py: 4}}>
            <Stack
                direction="column"
                divider={<Divider sx={{my: 2}} variant="fullWidth" light={true}/>}>
                <Stack
                    sx={{px: 4}}
                    direction="row"
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-between">

                    <AnimatePresence initial={true} mode="wait">
                        {theme === "dark" && (
                            <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                <LightModeOutlined
                                    onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                    sx={{
                                        color: "icon.secondary",
                                        padding: 1,
                                        fontSize: 32,
                                        borderRadius: "100%",
                                        cursor: "pointer",
                                        backgroundColor: "icon.secondaryBackground"
                                    }}/>
                            </Box>
                        )}
                    </AnimatePresence>
                    <AnimatePresence initial={true} mode="wait">
                        {theme === "light" && (
                            <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                <DarkModeOutlined
                                    onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                    sx={{
                                        color: "icon.secondary",
                                        padding: 1,
                                        fontSize: 32,
                                        borderRadius: "100%",
                                        cursor: "pointer",
                                        backgroundColor: "icon.secondaryBackground"
                                    }}/>
                            </Box>
                        )}
                    </AnimatePresence>
                    <CloseOutlined
                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleDrawer(false))}
                        sx={{
                            color: "icon.secondary",
                            padding: 1,
                            fontSize: 32,
                            borderRadius: "100%",
                            cursor: "pointer",
                            backgroundColor: "icon.secondaryBackground"
                        }}/>
                </Stack>

                <Box sx={{px: 4}}>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <Typography
                            variant="h4"
                            sx={{
                                textTransform: "uppercase",
                                color: "icon.secondary",
                                fontWeight: 700,
                                letterSpacing: 1.4
                            }}>
                            MJ Security Vault
                        </Typography>
                    </Link>
                    <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
                        <Link to="/" style={{textDecoration: "none"}}>
                            <CardMedia
                                component="img"
                                sx={{width: 70, height: 70, objectFit: "cover"}}
                                src={logo}
                            />
                        </Link>
                    </Stack>
                </Box>

                <Box sx={{px: 4}}>
                    <Stack direction="column" spacing={3}>
                        <NavLink path="/" label="Home"/>
                        <NavigationLink path="us" label="About Us"/>
                        <NavigationLink path="services" label="Services"/>
                        <NavigationLink path="plans" label="Payment Plans"/>
                        <NavigationLink path="contact" label="Contact"/>
                        <NavigationLink path="reviews" label="Testimonials"/>
                    </Stack>
                </Box>

                <Box sx={{px: 4}}>
                    <Link to="/consignment" style={{textDecoration: "none", width: "100%"}}>
                        <Button
                            fullWidth={true}
                            variant="contained"
                            disableElevation={true}
                            size="large"
                            color="secondary"
                            sx={{
                                textTransform: "capitalize",
                                color: "white",
                                borderWidth: 2,
                                backgroundColor: "secondary.main",
                                fontWeight: 700,
                            }}>
                            Check Vault
                        </Button>
                    </Link>
                </Box>
            </Stack>
        </Box>
    )
}

export default DrawerContent;
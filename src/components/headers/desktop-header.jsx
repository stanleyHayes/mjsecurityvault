import {Box, Button, CardMedia, Grid, Stack, Toolbar, Typography} from "@mui/material";
import NavigationLink from "../shared/navigation-link.jsx";
import {DarkModeOutlined, LightModeOutlined} from "@mui/icons-material";
import {AnimatePresence, motion} from "framer-motion";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import logo from "./../../assets/images/logo/logo.png";
import NavLink from "../shared/nav-link.jsx";

const DesktopHeader = () => {

    const {theme} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Toolbar
            sx={{
                borderBottomWidth: 2,
                borderBottomStyle: "solid",
                borderBottomColor: "divider",
                width: "100%",
            }}>
            <Grid sx={{width: "100%"}} container={true} alignItems="center" justifyContent="space-around">
                <Grid>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <CardMedia
                            component="img"
                            sx={{width: 70, height: 70, objectFit: "cover"}}
                            src={logo}
                        />
                    </Link>
                </Grid>
                <Grid>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <NavLink path="/" label="Home"/>
                        <NavigationLink path="us" label="About Us"/>
                        <NavigationLink path="services" label="Services"/>
                        <NavigationLink path="plans" label="Payment Plans"/>
                        <NavigationLink path="contact" label="Contact"/>
                        <NavigationLink path="reviews" label="Testimonials"/>
                    </Stack>
                </Grid>
                <Grid>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <AnimatePresence initial={true} mode="sync">
                            {theme === "dark" && (
                                <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                    <LightModeOutlined
                                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                        sx={{
                                            color: "icon.secondary",
                                            padding: 1,
                                            fontSize: 44,
                                            borderRadius: "10%",
                                            cursor: "pointer",
                                            backgroundColor: "icon.secondaryBackground"
                                        }}
                                    />
                                </Box>
                            )}
                        </AnimatePresence>
                        <AnimatePresence initial={true} mode="sync">
                            {theme === "light" && (
                                <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                    <DarkModeOutlined
                                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                        sx={{
                                            color: "icon.secondary",
                                            padding: 1,
                                            fontSize: 44,
                                            borderRadius: "10%",
                                            cursor: "pointer",
                                            backgroundColor: "icon.accentBackground"
                                        }}/>
                                </Box>
                            )}
                        </AnimatePresence>
                        <Link to="/consignment" style={{textDecoration: "none"}}>
                            <Button
                                variant="contained"
                                disableElevation={true}
                                size="large"
                                color="secondary"
                                sx={{
                                    textTransform: "capitalize",
                                    color: "white",
                                    borderRadius: 2,
                                    borderWidth: 2,
                                    backgroundColor: "secondary.main",
                                    fontWeight: 700
                                }}>
                                Check Vault
                            </Button>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader
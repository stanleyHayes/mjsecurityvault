import {Box, CardMedia, Grid, Stack, Toolbar, Typography} from "@mui/material";
import {DarkModeOutlined, LightModeOutlined, Menu} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";

const MobileHeader = () => {

    const {theme} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Toolbar
            sx={{
                borderBottomWidth: 2,
                borderBottomStyle: "solid",
                borderBottomColor: "divider"
            }}>
            <Grid sx={{width: "100%"}} container={true} alignItems="center" justifyContent="space-between">
                <Grid>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                        <Menu
                            onClick={() => dispatch(UI_ACTION_CREATORS.toggleDrawer(true))}
                            sx={{
                                color: "icon.secondary",
                                borderWidth: 0.5,
                                fontSize: 32,
                                padding: 1,
                                borderRadius: "10%",
                                backgroundColor: "icon.secondaryBackground",
                                cursor: "pointer",
                            }}/>
                        <Stack direction="row" spacing={3} alignItems="center">
                            <Link to="/" style={{textDecoration: "none"}}>
                                <CardMedia
                                    component="img"
                                    sx={{width: 50, height: 50, objectFit: "cover"}}
                                    src={logo}
                                />
                            </Link>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <AnimatePresence initial={true} mode="sync">
                            {theme === "dark" && (
                                <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                    <LightModeOutlined
                                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                        sx={{
                                            color: "icon.secondary",
                                            padding: 1,
                                            fontSize: 32,
                                            borderRadius: "10%",
                                            backgroundColor: "icon.secondaryBackground",
                                            cursor: "pointer",
                                        }}/>
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
                                            fontSize: 32,
                                            borderRadius: "10%",
                                            backgroundColor: "icon.secondaryBackground",
                                            cursor: "pointer",
                                        }}
                                    />
                                </Box>
                            )}
                        </AnimatePresence>
                    </Stack>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;
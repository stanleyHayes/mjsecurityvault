import {AppBar, Box} from "@mui/material";
import DesktopHeader from "./desktop-header.jsx";
import MobileHeader from "./mobile-header.jsx";

const Header = () => {

    return (
        <AppBar position="fixed" sx={{top: 0}} square={true} variant="elevation" elevation={0}>
            <Box sx={{display: {xs: "none", lg: "block"}}}>
                <DesktopHeader />
            </Box>
            <Box sx={{display: {xs: "block", lg: "none"}}}>
                <MobileHeader />
            </Box>
        </AppBar>
    )
}

export default Header;
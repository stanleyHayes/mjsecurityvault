import {Box, Container, Divider} from "@mui/material";
import DesktopFooter from "./desktop-footer.jsx";
import MobileFooter from "./mobile-footer.jsx";
import Copyright from "../shared/copyright.jsx";

const Footer = () => {
    return (
        <Box sx={{pt: 4}}>
            <Box sx={{mb: 3}}>
                <Box sx={{display: {xs: "none", lg: "block"}}}>
                    <DesktopFooter/>
                </Box>
                <Box sx={{display: {xs: "block", lg: "none"}}}>
                    <MobileFooter/>
                </Box>
            </Box>
            <Divider variant="fullWidth" sx={{backgroundColor: "rgba(255, 255, 255, 0.1)"}}/>
            <Box>
                <Copyright/>
            </Box>
        </Box>
    )
}

export default Footer;
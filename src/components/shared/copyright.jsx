import {Stack, Typography} from "@mui/material";

const Copyright = () => {
    return (
        <Stack sx={{py: 3}}>
            <Typography variant="body2" sx={{color: "text.primary", fontWeight: "bold"}} align="center">
                <Typography component="span" variant="body2" sx={{color: "text.primary"}} align="center">
                    1963 - 2025{" "}
                </Typography>
                &copy; MJ Security Vault
            </Typography>
        </Stack>
    )
}

export default Copyright;
import {Box, Stack} from "@mui/material";

const Info = ({icon, label, value}) => {
    return (
        <Stack direction="row" spacing={3} justifyContent="flex-start">
            {icon}
            <Stack direction="column" spcing={2}>
                {label}
                {value}
            </Stack>
        </Stack>
    )
}

export default Info;
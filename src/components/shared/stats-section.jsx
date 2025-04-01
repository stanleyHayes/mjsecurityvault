import {Box, Container, Grid} from "@mui/material";
import Stat from "./stat";

const StatsSection = () => {
    return (
        <Box sx={{py: 4, backgroundColor: "secondary.main", width: "100%"}}>
            <Container maxWidth="lg">
                <Grid spacing={4} container={true} justifyContent="space-between" alignItems="center">
                    <Grid item={true} xs={12} md={6} lg={3}>
                        <Stat title="Years in Business" value="15+" />
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={3}>
                        <Stat title="Projects Completed" value="500+" />
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={3}>
                        <Stat title="Team Members" value="5+" />
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={3}>
                        <Stat title="Retention Rate" value="95%" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default StatsSection;
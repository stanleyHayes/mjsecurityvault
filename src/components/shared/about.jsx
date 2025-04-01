import {CardContent, CardMedia, Grid, Typography} from "@mui/material";

const About = ({image, name, description, reversed = false}) => {
    return (
        <Grid container={true} spacing={0} direction={reversed ? "row-reverse" : "row"}>
            <Grid size={{xs: 12, md: 6}}>
                <CardMedia
                    component="img"
                    src={image}
                    sx={{
                        width: "100%",
                        height: 300,
                        objectFit: "cover",
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 32,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 32
                    }}
                />
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                <CardContent sx={{padding: 4}}>
                    <Typography
                        sx={{
                            mb: 1,
                            fontWeight: 700,
                            color: "text.primary"
                        }}
                        variant="h6">
                        {name}
                    </Typography>
                    <Typography sx={{color: "text.secondary"}} variant="body1">{description}</Typography>
                </CardContent>
            </Grid>
        </Grid>
    )
}

export default About;
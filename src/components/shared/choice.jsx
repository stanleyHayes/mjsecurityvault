import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const Choice = ({title, description, image}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                borderWidth: 2,
                borderColor: "light.secondary",
                backgroundColor: "background.default",
                height: "100%",
                borderRadius: 2,
                '&:hover': {
                    transition: "500ms all ease-out",
                    borderWidth: 2,
                    borderColor: "light.accent",
                    borderRadius: 2
                }
            }}>
            <CardContent>
                <CardMedia
                    component="img"
                    image={image}
                    sx={{
                        objectFit: "cover",
                        width: "100%",
                        height: 250,
                        mb: 2,
                        borderRadius: 1
                    }}
                />
                <Typography variant="body1" sx={{color: "text.primary", fontWeight: 700, mb: 2, fontSize: 20}}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{color: "text.secondary"}}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Choice;
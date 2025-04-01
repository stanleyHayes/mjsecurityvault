import {Card, CardContent, Typography} from "@mui/material";

const CoreValue = ({title, description}) => {
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
                    borderRadius: 4
                }
            }}>
            <CardContent>
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

export default CoreValue;
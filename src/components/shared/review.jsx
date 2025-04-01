import {Avatar, Card, CardActionArea, CardContent, CardHeader, Stack, Typography} from "@mui/material";
import moment from "moment";
import {Star} from "@mui/icons-material";

const Review = ({review}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                borderRadius: 2,
                borderColor: "light.secondary",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "background.default"
            }}>
            <CardHeader
                avatar={
                    <Avatar variant="rounded">
                        <Typography variant="h5" sx={{color: "text.primary", fontWeight: 700}}>
                            {review.client.name[0]}
                        </Typography>
                    </Avatar>
                }
                title={
                    <Typography variant="body1" sx={{color: "text.primary", fontWeight: 700}}>
                        {review.client.name}
                    </Typography>
                }
                subheader={
                    <Typography variant="body2" sx={{color: "text.secondary"}}>
                        {moment(review.created_at).fromNow()}
                    </Typography>
                }/>
            <CardContent sx={{flexGrow: 1}}>
                <Typography variant="body2" sx={{color: "text.secondary"}}>
                    {review.text}
                </Typography>
            </CardContent>
            <CardActionArea>
                <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Star
                            sx={{
                                color: "icon.secondary",
                                padding: 1,
                                fontSize: 32,
                                borderRadius: "100%",
                                backgroundColor: "icon.secondaryBackground"
                            }}
                        />
                        <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700}}>
                            {review.rating}
                        </Typography>
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Review;
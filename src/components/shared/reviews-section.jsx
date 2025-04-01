import {Box, Button, Card, CardContent, Container, Grid, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectReviews} from "../../redux/features/reviews/reviews-slice";
import Review from "./review.jsx";

const ReviewsSection = () => {

    const {reviews} = useSelector(selectReviews);

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "secondary.main", fontWeight: 700}}>
                            Reviews of our clients{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "text.primary", fontWeight: 700}}>
                                about our service.
                            </Typography>
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container={true}>
                            <Grid item={true} xs={12} md={8}>
                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                    We strive for maximum openness. We will be grateful to you for any truthful feedback
                                    about the work of our company., which you can leave here on the site or using the
                                    links below.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2}>
                            <Grid item={true} size={{xs: 12, md: 6, lg: 3}}>
                                <Card
                                    elevation={0}
                                    variant="elevation"
                                    sx={{
                                        backgroundColor: "light.accent",
                                        borderRadius: 2,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography variant="h6" sx={{color: "text.primary", fontWeight: 700, mb: 2}}>
                                            Have you already managed to use our services?
                                        </Typography>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 4}}>
                                            Leave your review about us, we will be glad to hear from you.
                                        </Typography>
                                    </CardContent>
                                    <CardContent>
                                        <Button
                                            disableElevation={true}
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                textTransform: "capitalize",
                                                color: "white",
                                                backgroundColor: "colors.footer",
                                                fontWeight: 700
                                            }}>
                                            Leave a review
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {reviews?.map((review, index) => {
                                return (
                                    <Grid key={index} item={true} size={{xs: 12, md: 6, lg: 3}}>
                                        <Review review={review}/>
                                    </Grid>
                                )
                            })}

                        </Grid>
                    </Box>

                    <Box>
                        <Grid container={true} spacing={2} justifyContent="center">
                            <Grid item={true} xs={12} md={2}>
                                <Button
                                    fullWidth={true}
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        textTransform: "capitalize",
                                        color: "colors.accent",
                                        borderRadius: 2,
                                        borderWidth: 2,
                                        borderColor: "colors.accent",
                                        borderStyle: "solid",
                                        fontWeight: 700
                                    }}>
                                    See More
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default ReviewsSection;
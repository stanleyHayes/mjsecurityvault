import {Box, Container, Stack, Typography} from "@mui/material";
import About from "./about.jsx";
import mission from "./../../assets/images/about/our-mission.png";
import story from "./../../assets/images/about/our-story.png";
import team from "./../../assets/images/about/meet-the-team.png";
import facility from "./../../assets/images/about/our-facility.png";

const AboutSection = () => {

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{color: "colors.accent", fontWeight: 700}}>
                            About{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontWeight: 700}}>
                                Us
                            </Typography>
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" sx={{color: "text.secondary"}}>
                            At MJ Security Vault, we believe true security is built on trust, technology, and time.
                            With over six decades of experience protecting what matters most, we’ve grown into a
                            fortress of reliability for individuals and businesses alike. Learn more about who we
                            are, what we stand for, and why our clients trust us with their most valuable
                            possessions.
                        </Typography>
                    </Box>
                    <Box>
                        <Stack
                            sx={{width: "100%"}}
                            spacing={0}>
                            <About
                                name="Our Story"
                                description="Founded by veterans in military defense, banking, and cybersecurity, MJ Security Vault was created to fill a void in high-security storage for Africa and beyond. We believe that your peace of mind should never be compromised."
                                image={story}
                            />
                            <About
                                reversed={true}
                                name="Our Mission"
                                description="To protect what matters most by offering secure, modern, and discreet vault solutions that match global security standards."
                                image={mission}
                            />
                            <About
                                name="Meet the Team"
                                description="A blend of retired military officers, IT security experts, and luxury service professionals — all aligned to make your experience secure and seamless."
                                image={team}
                            />
                            <About
                                reversed={true}
                                name="Our Facility"
                                description="Located in a secure zone, the facility is earthquake-resistant, climate-controlled, with multiple layers of access control, backup power, and military-grade walls."
                                image={facility}
                            />
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default AboutSection;
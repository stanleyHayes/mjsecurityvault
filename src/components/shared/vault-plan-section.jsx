import {Box, Container, Fade, Grid, Stack, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {MJ_SECURITY_VAULT_DATA} from "../../utils/data.js";
import {useState} from "react";
import VaultPlan from "./vault-plan.jsx";

const VaultPlanSection = () => {

    const yearlyPlans = MJ_SECURITY_VAULT_DATA.PLANS.map(plan => ({
        ...plan,
        price: plan.price.includes('/month')
            ? plan.price.replace('/month', '/year').replace(/\$\d+/, match => {
                const monthly = parseInt(match.replace('$', ''), 10);
                return `$${monthly * 10}`;
            })
            : plan.price
    }));

    const [billing, setBilling] = useState('monthly');

    const handleBillingChange = (event, newBilling) => {
        if (newBilling) setBilling(newBilling);
    };

    const plans = billing === 'monthly' ? MJ_SECURITY_VAULT_DATA.PLANS : yearlyPlans;

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Box>
                    <Stack direction="column" spacing={4}>
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{color: "colors.accent", fontWeight: 700, mb: 2}}>
                                Vault{' '}
                                <Typography
                                    component="span"
                                    variant="h4" sx={{
                                    color: "secondary.main",
                                    fontWeight: 700
                                }}>
                                    Plan
                                </Typography>
                            </Typography>

                            <Typography variant="body1" sx={{color: "text.secondary"}}>
                                Our vault rental plans are designed with flexibility and security in mind. Whether
                                you’re safeguarding personal treasures or protecting sensitive corporate data, MJ
                                Security Vault offers a plan tailored to your needs.
                            </Typography>
                        </Box>
                        <Box sx={{}}>
                            <ToggleButtonGroup
                                value={billing}
                                exclusive
                                onChange={handleBillingChange}
                                sx={{mb: 4}}
                                color="secondary"
                            >
                                <ToggleButton value="monthly">Monthly Billing</ToggleButton>
                                <ToggleButton value="yearly">Yearly Billing</ToggleButton>
                            </ToggleButtonGroup>

                            <Grid container spacing={4}>
                                {plans.map((plan, index) => (
                                    <Grid size={{xs: 12, sm: 6, md: 3}} xs={12} sm={6} md={3}
                                          key={`${billing}-${index}`}>
                                        <Fade in timeout={400}>
                                            <Box>
                                                <VaultPlan {...plan} />
                                            </Box>
                                        </Fade>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default VaultPlanSection;
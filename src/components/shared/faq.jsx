import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {South} from "@mui/icons-material";

const FAQ = ({faq}) => {
    return (
        <Accordion square={true} elevation={0} sx={{backgroundColor: "background.default"}}>
            <AccordionSummary expandIcon={
                <South
                    sx={{
                        color: "icon.secondary",
                        padding: 1,
                        fontSize: 32,
                        borderRadius: "100%"
                    }}
                />
            }>
                <Typography sx={{color: "text.primary", fontWeight: 700}} variant="body1">
                    {faq.question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{color: "text.secondary"}} variant="body2">
                    {faq.answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default FAQ;
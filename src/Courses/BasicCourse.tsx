import { ExpandMoreOutlined } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails, AccordionActions, Button } from "@mui/material";
import { t } from "i18next";

export default function BasicCourse() {
    return (
        <>
            <Accordion elevation={1}>
                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                    {t('BasicCourse.Title')}
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    <Accordion elevation={3}>
                        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                            Accordion 1
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
                <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                </AccordionActions>
            </Accordion>
        </>
    )
}

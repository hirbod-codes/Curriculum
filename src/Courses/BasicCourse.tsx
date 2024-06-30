import { ExpandMoreOutlined } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails, AccordionActions, Button } from "@mui/material";
import { t } from "i18next";
import English from "../Localization/Translations/English.json";

export default function BasicCourse() {
    return (
        <>
            <Accordion elevation={1}>
                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                    {t('BasicCourse.Title')}
                </AccordionSummary>
                <AccordionDetails>
                    {
                        English.BasicCourse.Topics.map((topic, i) =>
                            <Accordion key={i} elevation={3}>
                                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                    {t(`BasicCourse.Topics.${i}.Title`)}
                                </AccordionSummary>
                                <AccordionDetails>
                                    {t(`BasicCourse.Topics.${i}.Details`)}
                                </AccordionDetails>
                            </Accordion>
                        )
                    }
                </AccordionDetails>
            </Accordion>
        </>
    )
}

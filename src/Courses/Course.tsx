import { ExpandMoreOutlined } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { t } from "i18next";
import English from "../Localization/Translations/English.json";
import { ReactNode } from "react";

export default function Course({ courseName, icon }: { courseName: string, icon: ReactNode }) {
    return (
        <>
            <Accordion elevation={1}>
                <AccordionSummary expandIcon={icon}>
                    {t(`${courseName}.Title`)}
                </AccordionSummary>
                <AccordionDetails>
                    {
                        English.BasicCourse.Topics.map((topic, i) =>
                            <Accordion key={i} elevation={3}>
                                <AccordionSummary expandIcon={t(`${courseName}.Topics.${i}.Details`) ? <ExpandMoreOutlined /> : undefined}>
                                    {t(`${courseName}.Topics.${i}.Title`)}
                                </AccordionSummary>
                                {
                                    t(`${courseName}.Topics.${i}.Details`) &&
                                    <AccordionDetails>
                                        {t(`${courseName}.Topics.${i}.Details`)}
                                    </AccordionDetails>
                                }
                            </Accordion>
                        )
                    }
                </AccordionDetails>
            </Accordion>
        </>
    )
}

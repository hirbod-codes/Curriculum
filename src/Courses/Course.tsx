import { ExpandMoreOutlined } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails, Stack, Typography } from "@mui/material";
import { t } from "i18next";
import English from "../Localization/Translations/English.json";
import { ReactNode } from "react";

export default function Course({ courseName, icon, disabled = false }: { courseName: string, icon?: ReactNode, disabled?: boolean }) {
    return (
        <>
            <Accordion elevation={1} slotProps={{ transition: (p) => console.log(p) }} disabled={disabled}>
                <AccordionSummary expandIcon={disabled ? undefined : <ExpandMoreOutlined />} >
                    <Stack direction={'row'} width='100%' justifyContent='center' pr={1}>
                        <Typography mr={1}>
                            {t(`${courseName}.Title`)}
                        </Typography>
                        {icon}
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        English.BasicCourse.Topics.map((topic, i) =>
                            t(`${courseName}.Topics.${i}.Details`)
                                ?
                                <Accordion key={i} elevation={3} >
                                    <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                        <Stack direction={'row'} width='100%' justifyContent='center'>
                                            {t(`${courseName}.Topics.${i}.Title`)}
                                        </Stack>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {t(`${courseName}.Topics.${i}.Details`)}
                                    </AccordionDetails>
                                </Accordion>
                                :
                                <Accordion key={i} elevation={3} expanded={false} onChange={() => { }}>
                                    <AccordionSummary>
                                        <Stack direction={'row'} width='100%' justifyContent='center'>
                                            {t(`${courseName}.Topics.${i}.Title`)}
                                        </Stack>
                                    </AccordionSummary>
                                </Accordion>
                        )
                    }
                </AccordionDetails>
            </Accordion >
        </>
    )
}

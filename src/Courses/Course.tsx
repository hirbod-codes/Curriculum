import { ExpandMoreOutlined } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails, Stack, Typography } from "@mui/material";
import { t } from "i18next";
import English from "../Localization/Translations/English.json";
import { Icon } from "./Icon";

export function Course({ courseKey, icon, disabled = false }: { courseKey: string, icon?: string | null | undefined, disabled?: boolean }) {
    return (
        <Accordion elevation={1} disabled={disabled}>
            <AccordionSummary expandIcon={disabled ? undefined : <ExpandMoreOutlined />} >
                <Stack direction={'row'} width='100%' justifyContent='center' pr={1}>
                    <Typography mr={1}>
                        {t(`Courses.${courseKey}.Title`)}
                    </Typography>
                    <Icon name={icon} />
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                {
                    (Object.entries(English.Courses).find(f => f[0] === courseKey) ?? [])[1]?.Topics.map((topic, i) =>
                        t(`Courses.${courseKey}.Topics.${i}.Details`)
                            ?
                            <Accordion key={i} elevation={3} >
                                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                    <Stack direction={'row'} width='100%' justifyContent='center'>
                                        {t(`Courses.${courseKey}.Topics.${i}.Title`)}
                                    </Stack>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {t(`Courses.${courseKey}.Topics.${i}.Details`)}
                                </AccordionDetails>
                            </Accordion>
                            :
                            <Accordion key={i} elevation={3} expanded={false} onChange={() => { }}>
                                <AccordionSummary>
                                    <Stack direction={'row'} width='100%' justifyContent='center'>
                                        {t(`Courses.${courseKey}.Topics.${i}.Title`)}
                                    </Stack>
                                </AccordionSummary>
                            </Accordion>
                    )
                }
            </AccordionDetails>
        </Accordion >
    )
}

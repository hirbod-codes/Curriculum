import { Grid } from "@mui/material";
import { Course } from "./Course";
import English from "../Localization/Translations/English.json";

export function Courses() {
    return (
        <Grid container spacing={1} p={1}>
            {Object.entries(English.Courses).map((arr, i) =>
                <Grid key={i} item xs={arr[1].xs} sm={arr[1].sm}>
                    <Course courseKey={arr[0]} icon={arr[1]?.icon} disabled={arr[1].disabled} />
                </Grid>
            )}
        </Grid>
    )
}

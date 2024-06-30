import { Grid, Theme, useTheme } from "@mui/material";
import BasicCourse from "./BasicCourse";

export function Courses() {
    const theme: Theme = useTheme()

    return (
        <>
            <Grid container spacing={1} p={1}>
                <Grid item xs={12}>
                    <BasicCourse />
                </Grid>
            </Grid>
        </>
    )
}

import { Grid, Theme, useTheme } from "@mui/material";
import Course from "./Course";
import { JavascriptOutlined, SchoolOutlined } from "@mui/icons-material";

export function Courses() {
    const theme: Theme = useTheme()

    return (
        <>
            <Grid container spacing={1} p={1}>
                <Grid item xs={12}>
                    <Course courseName="BasicCourse" icon={<SchoolOutlined />} />
                </Grid>
                <Grid item xs={4}>
                    <Course courseName="JavascriptCourse" icon={<JavascriptOutlined />} />
                </Grid>
                <Grid item xs={4}>
                    <Course courseName="ExpressJSCourse" disabled />
                </Grid>
                <Grid item xs={4}>
                    <Course courseName="DockerCourse" disabled />
                </Grid>
            </Grid>
        </>
    )
}

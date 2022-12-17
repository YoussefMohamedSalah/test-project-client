import React from "react";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";

const AnnouncementsList = ({ AnnouncementData }) => {
    const user = {
        name: "Catherine Pike",
        avatar: "../../../../public/static/images/avatars/2.jpg",
        jobtitle: "Project Manager",
    };

    return (
        <Box>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
            >
                <Grid item xs={3} md={3} xl={3} lg={3}>
                    <Stack flexDirection="row">
                        <Avatar alt="sd" src={user.avatar} />
                        <Box sx={{ paddingLeft: 1 }}>
                            <Typography variant="h4">
                                {AnnouncementData.teacher_name}
                            </Typography>
                            <Typography variant="subtitle2">
                                {AnnouncementData.subject}
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={9} md={9} xl={9} lg={9}>
                    <Stack
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        gap={1}
                    >
                        <div
                            style={{
                                backgroundColor: "#adb5bd",
                                width: "1px",
                                height: "4rem",
                            }}
                        />
                        <Box sx={{ overflow: "hidden" }}>
                            <Typography variant="subtitle2">
                                {AnnouncementData.message}
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AnnouncementsList;

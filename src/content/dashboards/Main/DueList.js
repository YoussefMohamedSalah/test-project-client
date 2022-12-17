import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import SubBtn from '../../../components/Btns/SubBtn'

const DueList = ({ DueData }) => {
    return (
        <Box p={1}>
            <Stack flexDirection="column">
                <Typography variant="h5" pb={1}>
                    {DueData.task_type === "quiz" ? (
                        <HourglassTopIcon sx={{ color: "#EB455F" }} />
                    ) : (
                        <FactCheckIcon sx={{ color: "#EB455F" }} />
                    )}{" "}
                    {DueData.title}
                </Typography>
                <Stack gap={1}>
                    <Typography variant="subtitle2 as h6">Course : {DueData.course} </Typography>
                    <Typography variant="subtitle2 as h6">Topic : {DueData.topic} </Typography>
                    <Typography variant="subtitle2 as h6">Due To : {DueData.due_to} </Typography>
                    <Box sx={{ pt: 2 }}>
                        <SubBtn Content={DueData.task_type === 'quiz' ? 'Start Quiz' : 'Solve Assignment'} />
                    </Box>
                </Stack>
                <div style={{ width: '100%', height: '1px', marginTop: '10px', backgroundColor: '#EB455F' }} />
            </Stack>
        </Box >
    );
};

export default DueList;

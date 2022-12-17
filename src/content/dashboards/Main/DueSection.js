import React, { useEffect, useState } from 'react'
import { Box, Card, Stack } from "@mui/material";
import CardHeader from "../../../components/CardHeader";
import DueList from './DueList';
import axios from 'axios';


const DueSection = () => {
  const [dueData, setDueData] = useState([]);

  const getDueTasks = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/api/due_task/`);
      setDueData(response.data);
    } catch (error) {
      console.log(error)
      throw new Error('Problem Fetching Data For Due Tasks')
    }
  }

  useEffect(() => {
    getDueTasks()
  }, [])


  return (
    <Card sx={{ p: 2, borderRadius: 1 }}>
      <Stack flexDirection="column">
        <CardHeader
          title={"What's due"}
          subTitle={'Sometimes "LATER" Becomes "NEVER" Go Now'}
          actionTitle={"All"}
          action={() => console.log("get All Announcements Data")}
        />
        <Box pt={2}>
        {dueData.map((due) => {
            return (
              <DueList DueData={due} />
            )
          })}
        </Box>
      </Stack>
    </Card>
  )
}

export default DueSection
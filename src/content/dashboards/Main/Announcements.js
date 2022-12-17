import { Box, Card, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import AnnouncementsList from "./AnnouncementsList";
import CardHeader from "../../../components/CardHeader";
import axios from "axios";

const Announcements = () => {
  const [announcementData, setAnnouncementData] = useState([]);

  const getAnnouncement = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/api/announcement/`);
      setAnnouncementData(response.data);
    } catch (error) {
      console.log(error)
      throw new Error('Problem Fetching Data For Announcement')
    }
  }

  useEffect(() => {
    getAnnouncement()
  }, [])


  return (
    <Card sx={{ p: 2, borderRadius: 1 }}>
      <Stack flexDirection="column">
        <CardHeader
          title={"Annouuncements"}
          subTitle={"we educate | keep updated :]"}
          actionTitle={"All"}
          action={() => console.log("get All Announcements Data")}
        />
        <Stack pt={2} gap={3}>
          {announcementData.map((announcement) => {
            return (
              <AnnouncementsList AnnouncementData={announcement} />
            )
          })}
        </Stack>
      </Stack>
    </Card>
  );
};

export default Announcements;

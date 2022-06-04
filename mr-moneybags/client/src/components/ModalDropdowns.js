import React, { useState } from "react";
import DetailHeader from "./DetailModalHeader";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Outlet, useNavigate } from "react-router-dom";

<DetailHeader />;
function ModalDropdowns() {
  const [selectedTab, setSelectedTab] = useState(0);
  const goTo = useNavigate();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    switch (newValue) {
      case 0:
        goTo("/Summary");
        break;
      case 1:
        goTo("/Statistics");
        break;
 
      default:
        return;
    }
  };

  return (
    <>
      <DetailHeader />
      <Box style={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={selectedTab} onChange={handleChange} variant="fullWidth">
          <Tab label="Summary" />
          <Tab label="Statistics" />
        </Tabs>
      </Box>
      <Outlet />
    </>
  );
}

export default ModalDropdowns;

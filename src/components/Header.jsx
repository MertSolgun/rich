import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  const type = {
    color: "white",
    fontFamily: "JetBrains Mono",
    fontSize: "3rem",
    margin: "auto",
    ml: "20px",
    maxWidth: "600px",
    "@media (max-width:600px)": {
      fontSize: "1.5rem",
      margin: "20px auto",
    },
  };
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
    "@media (max-width:600px)": {
      gap: "30px",
    },
  };
  return (
    <Stack
      className="headerComp"
      sx={{
        margin: "60px auto",
        maxWidth: "1500px",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box
          sx={{
            ...styles,
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography component="h1" className="headerText" sx={type}>
            <span>LET US PROVIDE ALL YOUR SOCIAL MEDIA BOTS.</span>
          </Typography>
          <img
            src="https://berichwithme.com/public/storage/fg5663.svg"
            loading="lazy"
            style={{
              width: "500px",
              marginRight: "120px",
              margin: "auto",
              maxWidth: "90%",
            }}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default Header;

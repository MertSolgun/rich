import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  const styles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "auto",
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
          <Typography
            component="h1"
            className="headerText"
            sx={{
              color: "white",
              fontFamily: "JetBrains Mono",
              fontSize: "3rem",
              margin: "auto",
              ml: "20px",
              maxWidth: "600px",
            }}
          >
            <span>LET US PROVIDE ALL YOUR SOCIAL MEDIA BOTS.</span>
          </Typography>
          <img
            src="https://berichwithme.com/public/storage/fg5663.svg"
            loading="lazy"
            style={{
              width: "500px",
              marginRight: "120px",
              margin: "auto",
            }}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default Header;

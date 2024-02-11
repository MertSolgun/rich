import React from "react";
import instaLogo from "../assets/instalogo.png";
import kickLogo from "../assets/kicklogo.png";
import spotifyLogo from "../assets/spotifylogo.png";
import twitchLogo from "../assets/twlogo.png";
import twitterLogo from "../assets/xlogo.png";
import youtubeLogo from "../assets/ytlogo.png";
import Typography from "@mui/material/Typography";
import PlatformCards from "./PlatformCard";
import { Container, Grid } from "@mui/material";

const Platforms = () => {
  const platCards = [
    {
      icon: instaLogo,
      title: "Instagram",
      id: 1,
    },
    {
      icon: kickLogo,
      title: "Kick",
      id: 2,
    },
    {
      icon: spotifyLogo,
      title: "Spotify",
      id: 3,
    },
    {
      icon: twitchLogo,
      title: "Twitch",
      id: 4,
    },
    {
      icon: twitterLogo,
      title: "Twitter",
      id: 5,
    },
    {
      icon: youtubeLogo,
      title: "Youtube",
      id: 6,
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        my: { xs: 10, lg: 40, md: 30 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontFamily: "JetBrains Mono",
          textAlign: "center",
          fontSize: { xs: "1.5rem", lg: "3rem" },
        }}
      >
        On which platforms do we provide bots?
      </Typography>
      <Grid
        container
        spacing={2}
        my={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {platCards.map((item) => (
          <Grid item xs={6} lg={4} key={item?.id}>
            <PlatformCards item={item} />
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontFamily: "JetBrains Mono",
          textAlign: "center",
          fontSize: { xs: "1.5rem", lg: "3rem" },
        }}
      >
        And all other platforms...
      </Typography>
    </Container>
  );
};

export default Platforms;

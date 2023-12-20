import { Box } from "@mui/material";
import React, { Fragment } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

const Home = () => {
  return (
    <Fragment>
      <Box
        sx={{
          mt: 2,
          height: 450,
          backgroundImage: "url('/moviewUrl.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: "70%",
        }}
      >
        <SectionOne
          title="Slider Title"
          images={[
            "/new.jpeg",
            "/new.jpeg",
            "/new.jpeg",
            "/new.jpeg",
            "/new.jpeg",
          ]}
          totalReviews={10}
        />
      </Box>
      <SectionTwo />
    </Fragment>
  );
};

export default Home;

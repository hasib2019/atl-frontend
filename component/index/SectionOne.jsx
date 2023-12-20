// SliderComponent.js
import { Button, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Slider from "react-slick";

const SectionOne = ({ title, images, totalReviews }) => {
  const router = useRouter();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const viewVideo = (i) => {
    console.log("viewVideo", i);
    router.push({
      pathname: "/movies/movieView",
      query: { id: i+1 },
    });
  };
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div style={{ width: "200px", borderRadius: "10px" }}>
            <Slider {...settings}>
              {images.map((row, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <Image src={row} width={200} height={250} alt={"alter" + i} />
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "-15px 0 0 60px" }}
                    onClick={() => viewVideo(i)}
                  >
                    Watch
                  </Button>
                </div>
              ))}
            </Slider>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default SectionOne;

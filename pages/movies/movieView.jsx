import MainLayout from "@/component/layout/MainLayout";
import MovieView from "@/component/moview-view/MovieView";
import React from "react";

const movieView = (props) => {
  console.log({props})
  const movieId = props?.query?.id;
  return (
    <MainLayout>
      <MovieView {...{movieId}}/>
    </MainLayout>
  );
};

export default movieView;
export const getServerSideProps = (context) => {
  return {
    props: {
      query: context.query,
    },
  };
};
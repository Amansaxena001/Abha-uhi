

import Home from '@app/src/containers/home/index'

import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { NextPage } from "next";

// const CoachFeedbackFormDynamic = dynamic(() => import(), {
//   // loading: () => <FullPageLoader />,
//   ssr: false
// });

export default function index(props) {
  return (
    <>
      <Head>
        <title>Sharda Sangeet Vidhyalaya</title>
        <meta name="description" content="Learn Indian Classical Music, from the times of tansen" />
      </Head>
      <Home />
    </>

  )
}

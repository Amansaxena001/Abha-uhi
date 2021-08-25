import Home from '@app/src/containers/home/index';

import React from 'react';
import Head from 'next/head';

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
  );
}

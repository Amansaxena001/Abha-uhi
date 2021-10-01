import React from 'react';
import Head from 'next/head';
import UserFeedBack from '../containers/review-page';

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
            <UserFeedBack />
        </>
    );
}

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
                <title>Feedback @Sharda Sangeet Vidhyalaya</title>;
                <meta name="viewport" content="width=device-width, initial-scale=1" key="port" />
                <meta charSet="utf-8" />
                <meta name="shardaSangeetLive:feedback" content="feedback" />;
                <meta
                    name="sharda sangeet live"
                    content="Give us a feedback if you are or were a student of Sharda Sangeet Vidhyalaya, it'll help us to grow more.

                 "
                    key="og:heading"
                />
            </Head>
            <UserFeedBack />
        </>
    );
}

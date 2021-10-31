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
                <meta name="viewport" content="width=device-width, initial-scale=1" key="port" />
                <meta charSet="utf-8" />
                <meta name="shardaSangeetLive:main" content="summary" />;
                <meta
                    name="sharda sangeet live"
                    content="Learn online Indian/Hindustani classical music from a Govt registered center
                by Prayag sangeet Samiti, Allahabad.
                An academy est for more than 10 years and a school which has been teaching Indian Classical Music since 1990.
                Mrs. Poonam Saxena has been awarded with awards from performances to judgements in competitions in school,
                 universities etc and has also performed for All India Radio in 80's

                 "
                    key="og:heading"
                />
                <meta
                    property="og:title"
                    content="Start Learning Indian classical music online from today. Live and interactive sections with the Guru Mrs. Poonam Saxena"
                    key="title"
                />
                <meta
                    property="og:description"
                    content="In covid, mental health is big issue from which we are still
                 suffering from that, thats why thought of helping people in a unique way by going online.
                  A hobby that can not only help you in your career for eg:- college admissions,jobs an extra worth added qualification in your
                  resume but also keeps you active in your daily by keeping your mental health good"
                    key="og:desc"
                />
                <meta property="og:url" content="https://shardasangeet.live" />
                <meta property="og:type" content="website" />
            </Head>
            <Home />
        </>
    );
}

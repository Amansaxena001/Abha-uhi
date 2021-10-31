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
                <meta property="og:locale" content="en_US" />
                <meta
                    name="shardasangeetlive:title"
                    content="Learn Indian Classical music online from today. Visit our website and if you
                     have any doubts drop us a mail on shardasangeetmusic@email.com"
                />
                ;
                <meta name="shardasangeetlive:main" content="summary" />;
                <meta name="shardasangeetlive:url" content="shardasangeet.live" />
                <meta
                    name="shardasangeetlive:description"
                    content="In covid, mental health is big issue from which we are still
                 suffering from that, thats why thought of helping people in a unique way by going online.
                  A hobby that can not only help you in your career for eg:- college admissions,jobs an extra worth added qualification in your
                  resume but also keeps you active in your daily by keeping your mental health good"
                    key="og:heading"
                />
                <meta
                    property="og:title"
                    content="Start Learning Indian classical music online from today. Live and interactive sections with the Guru Mrs. Poonam Saxena"
                    key="title"
                />
                <meta
                    property="og:description"
                    content="Now learn Indian classical music online with live one-on-one interactive sessions by Guru Mrs.Poonam Saxena.
                    We are a music school specifically focused on teaching Indian Classical Music i'e vocals and synthesizers.
                    The school has been running since 1990 and as of today, it's a registered Govt center under Prayag Sangeet Samiti,
                    Allahabad . The school follows strict sllaybus decided by
                    Prayag Sangeet Samiti who is also responsible for conducts examinations all over India every year.

                 "
                    key="og:desc"
                />
                <meta property="og:url" content="https://shardasangeet.live" />
                <meta property="og:type" content="website" />
            </Head>
            <Home />
        </>
    );
}

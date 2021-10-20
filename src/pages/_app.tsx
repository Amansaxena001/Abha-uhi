import '@app/styles/index.scss';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Yo
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';

import { store } from '@app/src/redux/store';
// import BasicNavbar from '../components/basic-navbar';
import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
NProgress.configure({ showSpinner: false })


function MyApp({ Component, pageProps }) {
    const [queryClient] = React.useState<QueryClient>(() => new QueryClient());
    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    }, [])

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
    }, []);

    useEffect(() => {
        document.documentElement.lang = 'en'
    }, []);
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    {/* <BasicNavbar /> */}
                    <Component {...pageProps} />
                </Hydrate>
            </QueryClientProvider>
        </Provider>
    );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);

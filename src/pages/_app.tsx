import '@app/styles/index.scss';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';

import { store } from '@app/src/redux/store';

function MyApp({ Component, pageProps }) {

    const [queryClient] = React.useState<QueryClient>(() => new QueryClient())

    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
    }, [])


    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    {  /* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Component {...pageProps} />
                </Hydrate>
            </QueryClientProvider>
        </Provider>
    );





}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);

import '@app/styles/index.scss';
import App from 'next/app';
import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';

import { store } from '@app/src/redux/store';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
    }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);

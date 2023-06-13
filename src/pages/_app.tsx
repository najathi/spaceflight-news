import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.css'

import Layout from '../components/Layout';
import { persistor, store, wrapper } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Layout>
                    <NextNProgress
                        color="#29D"
                        height={2}
                        showOnShallow={true}
                    />
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider >
    );
}

export default wrapper.withRedux(MyApp);
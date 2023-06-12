import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import '../styles/globals.css'

import { persistor, store, wrapper } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Layout>
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
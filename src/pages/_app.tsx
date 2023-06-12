import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
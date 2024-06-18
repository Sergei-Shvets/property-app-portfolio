import { GlobalProvider } from '@/context/GlobalContext';
import { ToastContainer } from 'react-toastify';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

import '@/assets/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
    return (
        <GlobalProvider>
            <AuthProvider>
                <html lang="en" style={{ height: '100%' }}>
                    <body style={{ height: '100%' }}>
                        <div
                            className="wrapper"
                            style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <Navbar />
                            <main style={{ flex: '1 1 auto' }}>{children}</main>
                            <Footer />
                            <ToastContainer />
                        </div>
                    </body>
                </html>
            </AuthProvider>
        </GlobalProvider>
    );
};

export default MainLayout;

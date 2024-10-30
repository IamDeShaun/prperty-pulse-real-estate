import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Rental Pulse',
    keywords: 'rental, property, real estate',
    description: 'Find the perfect rental property for your family',
};

const RootLayout = ({ children }) => {
    return ( <html>
        <body>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    </html> );
}
 
export default RootLayout;
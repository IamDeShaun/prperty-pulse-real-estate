import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Rental Pulse',
    keywords: 'rental, property, real estate',
    description: 'Find the perfect rental property for your family',
};

const RootLayout = ({ children }) => {
    return ( <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html> );
}
 
export default RootLayout;
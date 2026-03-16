import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export const metadata: Metadata = {
  title: "Praveen's Fitness Family | 90-Day Body Transformation",
  description: "Join 6000+ clients who transformed their bodies with Praveen's personalized fitness and nutrition coaching. Fat loss, muscle gain, and body transformation programs.",
  keywords: "fitness coach India, body transformation, fat loss program, muscle building, diet plan, Praveen fitness",
  openGraph: {
    title: "Praveen's Fitness Family",
    description: "Transform Your Body in 90 Days with certified nutritionist and fitness coach Praveen.",
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div style={{ width: '100vw', maxWidth: '100%', overflowX: 'hidden', position: 'relative' }}>
          <Navbar />
          <main>{children}</main>
          <FloatingCTA />
          <Footer />
        </div>
      </body>
    </html>
  );
}

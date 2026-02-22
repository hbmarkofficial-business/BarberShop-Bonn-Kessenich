import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Bonn | BarberShop Kessenich</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop BarberShop Kessenich in Bonn für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bonn, Kessenich"
        />
        <link rel="canonical" href="https://barbershop-kessenich.de" />

        {/* Open Graph */}
        <meta property="og:title" content="BarberShop Kessenich | Premium Barbershop Bonn" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Bonn."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barbershop-kessenich.de" />
        <meta property="og:image" content="https://barbershop-kessenich.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BarberShop Kessenich | Premium Barbershop Bonn" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://barbershop-kessenich.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "BarberShop Kessenich",
            "image": "https://barbershop-kessenich.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hausdorffstraße 221",
              "addressLocality": "Bonn",
              "postalCode": "53129",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.7118",
              "longitude": "7.1108"
            },
            "url": "https://barbershop-kessenich.de",
            "telephone": "+49 174 1350839",
            "openingHours": "Mo-Fr 09:00-19:30, Sa 09:00-18:30",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/barbershopkessenich",
              "https://www.instagram.com/barbershopkessenich"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;


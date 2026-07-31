import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import WhatToExpect from "@/components/WhatToExpect";
import EmployerGrid from "@/components/EmployerGrid";
import EmployerTable from "@/components/EmployerTable";
import Footer from "@/components/Footer";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Northern Nevada's Largest No-Cost Career Fair",
  description:
    "Northern Nevada's largest no-cost career fair. 90+ employers hiring on the spot, on-site career coaching, and free job training resources.",
  startDate: "2026-08-24T11:00:00-07:00",
  endDate: "2026-08-24T14:00:00-07:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Reno-Sparks Convention Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4590 S Virginia St",
      addressLocality: "Reno",
      addressRegion: "NV",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "GovernmentOrganization",
    name: "Washoe County",
    url: "https://www.washoecounty.gov/",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Hero />
      <Highlights />
      <EmployerGrid />
      <WhatToExpect />
      <EmployerTable />
      <Footer />
    </main>
  );
}

import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import WhatToExpect, { FAQ_ITEMS } from "@/components/WhatToExpect";
import EmployerGrid from "@/components/EmployerGrid";
import EmployerTable from "@/components/EmployerTable";
import Footer from "@/components/Footer";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Northern Nevada's Largest No-Cost Career Fair",
  description:
    "Northern Nevada's largest no-cost career fair. Thursday, October 22, 2026, 11am–2pm at the Reno-Sparks Convention Center. 90+ employers hiring on the spot, on-site career coaching, and free job training resources.",
  startDate: "2026-10-22T11:00:00-07:00",
  endDate: "2026-10-22T14:00:00-07:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventRescheduled",
  previousStartDate: "2026-08-24",
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
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-775-284-9660",
      email: "biz-hub@detr.nv.gov",
      contactType: "customer service",
    },
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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

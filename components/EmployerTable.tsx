const EMPLOYERS = [
  "Access To Health",
  "All Valley Home Care",
  "Allied Universal Security",
  "American Battery Technology Co",
  "Amperesand Inc",
  "Arrow",
  "Barnes & Noble Purchasing Inc",
  "Bluetree Dental",
  "Brookdale NW Reno",
  "Brookdale Vista",
  "Carson Valley Health",
  "Chromalloy Nevada",
  "Cintas Corp",
  "City of Carson City",
  "Crown Equipment Corp",
  "CSD Works Nevada",
  "Davidson's Organic Teas",
  "Desert Fire Protection LP",
  "DHS - Customs And Border Protection",
  "DLS",
  "DOJ - FCI Herlong",
  "Eaton",
  "Empire Cat",
  "FedEx Freight Inc",
  "Food Bank Of Northern Nevada",
  "Garlock Flexibles",
  "GMT Care LLC",
  "Goettl Air Conditioning & Plumbing",
  "Goodwill Industries",
  "H&T Recharge",
  "Hamilton Company USA",
  "Hamilton Medical",
  "Help At Home Senior Care Of Nevada",
  "Hoffmaster Group Inc",
  "Id Logistics",
  "IES Communications LLC",
  "J Resorts",
  "Juniper Service",
  "Keolis North America",
  "Kromer Investments Inc",
  "Legislative Counsel Bureau",
  "Mary's Gone Crackers",
  "Maxim Healthcare Services Inc",
  "Model Dairy",
  "Monin Inc",
  "Morrey Distributing Co Inc",
  "Nevada Gold Mines",
  "Nevada Health Authority",
  "Nevadaworks",
  "NOW Foods",
  "Nutrient Survival",
  "Pacific Cheese",
  "Panasonic",
  "Product Connections",
  "Redwood Materials Inc",
  "Regional Transit Authority (RTC)",
  "Renewal By Andersen",
  "Reno Behavioral Healthcare Hospital LLC",
  "Reno Orthopedic Clinic",
  "Reno Sparks Cab",
  "Reno Tahoe Airport Authority",
  "RHA",
  "Rix Industries",
  "Saint Mary's",
  "Securitas Security Services",
  "SendCutSend",
  "Sierra Home Health Care",
  "Silver Summit",
  "Small Mine Development",
  "Southwest Critical Materials, LLC",
  "Sparks Family Hospital Inc",
  "Staff Pro Inc",
  "State Of Nevada - DETR",
  "State Of Nevada - DHRM",
  "State Of Nevada - EmployNV Career Hub",
  "State Of Nevada - Voc Rehab",
  "State Of Nevada - Workforce Programs Unit",
  "Surefire LLC",
  "Tesla",
  "TMCC",
  "Transportation Security Administration (TSA)",
  "United States Postal Service",
  "United Way",
  "UNR",
  "VDM Metals Usa LLC",
  "Via Seating",
  "Wabtec Corporation",
  "Washoe County - Community Services",
  "Washoe County - Human Resource",
  "Washoe County - Human Services",
  "Washoe County - Juvenile Services",
  "Washoe County - Regional Animal Services",
  "Washoe County School District",
  "Washoe Tribe Of Nevada And California",
  "WB Sprague Co Inc",
  "Weber Metals",
  "WNC",
];

export default function EmployerTable() {
  return (
    <section className="flex flex-1 flex-col justify-center bg-brand-light px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-base font-bold uppercase tracking-wide text-brand-blue sm:text-lg">
          All Employers & Resources Attending
        </h2>

        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {EMPLOYERS.map((employer) => (
            <li
              key={employer}
              className="flex items-center gap-2 border-b border-brand-blue/10 pb-2 text-sm text-brand-dark"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow"
              />
              {employer}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

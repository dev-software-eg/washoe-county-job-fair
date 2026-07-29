const EMPLOYERS = [
  "Allied Universal Event Services",
  "Ampersand Inc.",
  "Arrow Electronics Inc.",
  "BKD Employee Services LLC",
  "Bluetree Dental",
  "Carson Valley Health",
  "Chromalloy",
  "Cintas Corp",
  "City of Carson City",
  "Crossmark Inc.",
  "Crown Equipment Corp",
  "Davidsons Inc.",
  "Diversified Labeling Solutions, Inc..",
  "Eaton Corporation",
  "Emeritus Corporation",
  "Empire Southwest, LLC",
  "FedEx Freight Inc.",
  "GMT Care LLC",
  "Goodwill Industries",
  "GP&C Operations, LLC",
  "Greater Nevada Windows and Doors, LLC",
  "H&T Nevada, LLC",
  "Hamilton Holding Management Co.",
  "Hamilton Medical",
  "Help at Home Senior Care of Nevada",
  "Hoffmaster Group Inc.",
  "Juniper Service",
  "Las Vegas Peach LLC",
  "Legislative Counsel Bureau",
  "MARY'S GONE CRACKERS",
  "Maxim Healthcare Services Inc.",
  "Medical Services of Nevada Inc.",
  "Monin Inc.",
  "Morrey Distributing Co., Inc.",
  "Nevada Dairy LLC",
  "Nevada Gold Mines, LLC",
  "Nevada System Higher Education (NSHE)",
  "Nevadaworks",
  "Northern Nevada Medical Center",
  "Now Health Group Inc. - Western Operations",
  "Nutrient Foods LLC",
  "Oroplata Resources Inc.",
  "Pacific Cheese",
  "Panasonic Energy Corporation Of North America",
  "Prime Healthcare Service Reno",
  "Redwood Materials Inc.",
  "Reno Behavioral Healthcare Hospital LLC",
  "Reno Orthopedic Clinic",
  "Reno Tahoe Airport Authority",
  "RIX Industries",
  "Securitas Security Services",
  "Sierra Home Health Care",
  "Small Mine Development",
  "Southwest Critical Materials, LLC",
  "State of Nevada",
  "Surefire LLC",
  "U.S. Department of Homeland Security",
  "United States Department of Homeland Security",
  "United States Postal Service",
  "Universal Protection Service",
  "US Department of Justice",
  "VDM Metals USA LLC",
  "VIA Inc.",
  "Washoe County",
  "Washoe County School District",
  "WB Sprague Co Inc.",
  "Weber Metals Inc.",
];

export default function EmployerTable() {
  return (
    <section className="flex flex-1 flex-col justify-center bg-brand-light px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-base font-bold uppercase tracking-wide text-brand-blue sm:text-lg">
          All Employers attending
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

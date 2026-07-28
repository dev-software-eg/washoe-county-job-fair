import Image from "next/image";

type Employer = {
  name: string;
  file: string;
  width: number;
  height: number;
  link?: string;
  /** Lower = bigger logo within the same card footprint. Defaults to "p-4". */
  padding?: string;
};

const EMPLOYERS: Employer[] = [
  {
    name: "Carson Valley Health",
    file: "Carson Valley Health.png",
    link: "https://carsonvalleyhealth.org/",
    width: 1200,
    height: 900,
    padding: "p-0",
  },
  {
    name: "Nevada Gold Mines",
    file: "Nevada Gold Mines logo.png",
    link: "https://www.barrick.com/English/operations/nevada-gold-mines/default.aspx",
    width: 565,
    height: 254,
  },
  {
    name: "Truckee Meadows Community College",
    file: "STACKED TMCC GREEN.png",
    link: "https://www.tmcc.edu/",
    width: 1009,
    height: 720,
    padding: "p-2",
  },
  {
    name: "Nevada Legislature",
    file: "Legislative Counsel Bureau.png",
    link: "https://www.leg.state.nv.us/",
    width: 1280,
    height: 768,
    padding: "p-2",
  },
  {
    name: "FedEx Freight",
    file: "FedexFreight.png",
    link: "https://www.fedex.com/en-us/shipping/freight.html",
    width: 456,
    height: 272,
    padding: "p-2",
  },
  {
    name: "Panasonic Energy",
    file: "panasonic logo.png",
    link: "https://energy.na.panasonic.com/",
    width: 450,
    height: 142,
  },
  {
    name: "Hamilton Company",
    file: "HAMILTON CO logo.png",
    link: "https://www.hamiltoncompany.com/reno-nevada",
    width: 596,
    height: 170,
    padding: "p-2",
  },
  {
    name: "Empire Cat",
    file: "Empire Cat logo.png",
    link: "https://www.empire-cat.com/locations/reno-sparks",
    width: 1154,
    height: 306,
  },
  {
    name: "United States Postal Service",
    file: "usps-8211-united-states-postal-service.png",
    link: "https://www.usps.com/",
    width: 800,
    height: 800,
    padding: "p-0",
  },
  {
    name: "University of Nevada, Reno",
    file: "unr-logo.png",
    link: "https://www.unr.edu/",
    width: 2185,
    height: 1584,
  },
];

export default function EmployerGrid() {
  return (
    <section className="flex flex-1 flex-col justify-center bg-brand-light px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-base font-bold uppercase tracking-wide text-brand-blue sm:text-lg">
          Just a few of the 90+ employers on site:
        </h2>

        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {EMPLOYERS.map((employer) => (
            <a
              href={employer.link ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li
                key={employer.file}
                className={`flex h-24 items-center justify-center rounded-lg bg-white shadow-sm ${employer.padding ?? "p-4"}`}
              >
                <Image
                  src={`/logos/${encodeURIComponent(employer.file)}`}
                  alt={employer.name}
                  width={employer.width}
                  height={employer.height}
                  className="h-full w-full object-contain"
                />
              </li>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
}

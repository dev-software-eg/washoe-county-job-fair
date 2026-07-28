import Image from "next/image";

type Employer = {
  name: string;
  file: string;
  width: number;
  height: number;
  /** Lower = bigger logo within the same card footprint. Defaults to "p-4". */
  padding?: string;
};

const EMPLOYERS: Employer[] = [
  { name: "Carson Valley Health", file: "Carson Valley Health.png", width: 1200, height: 900, padding: "p-0" },
  { name: "Empire Cat", file: "Empire Cat logo.png", width: 1154, height: 306 },
  { name: "FedEx Freight", file: "FedexFreight.png", width: 456, height: 272, padding: "p-2" },
  { name: "Hamilton Company", file: "HAMILTON CO logo.png", width: 596, height: 170, padding: "p-2" },
  { name: "Nevada Legislature", file: "Legislative Counsel Bureau.png", width: 1280, height: 768, padding: "p-2" },
  { name: "Nevada Gold Mines", file: "Nevada Gold Mines logo.png", width: 565, height: 254 },
  { name: "Truckee Meadows Community College", file: "STACKED TMCC GREEN.png", width: 1009, height: 720, padding: "p-2" },
  { name: "Panasonic Energy", file: "panasonic logo.png", width: 450, height: 142 },
  { name: "University of Nevada, Reno", file: "unr-logo.png", width: 2185, height: 1584 },
  { name: "United States Postal Service", file: "usps-8211-united-states-postal-service.png", width: 800, height: 800, padding: "p-0" },
];

export default function EmployerGrid() {
  return (
    <section className="flex flex-1 flex-col justify-center bg-brand-light px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-md font-bold uppercase tracking-wide text-brand-dark">
          Just a few of the 90+ employers on site:
        </h2>

        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {EMPLOYERS.map((employer) => (
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
          ))}
        </ul>
      </div>
    </section>
  );
}

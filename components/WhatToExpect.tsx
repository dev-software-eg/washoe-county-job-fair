type ExpectItem = {
  title: string;
  body: string | React.ReactNode;
};

const JOB_SEEKER_ITEMS: ExpectItem[] = [
  {
    title: "90+ employers",
    body: "Will be on site looking to hire",
  },
  {
    title: "On-the-spot offers",
    body: "Potential on-the-spot interviews and job offers",
  },
  {
    title: "Diverse industries",
    body: "Explore jobs in a range of industries",
  },
  {
    title: "Career coaching",
    body: "On-site career coaching, resume writing & interview support",
  },
  {
    title: "Free training",
    body: "Learn about free job training & job-related financial support",
  },
  {
    title: "Accessible support",
    body: "Career guidance and resources for those with disabilities",
  },
];

const EMPLOYER_SETUP: ExpectItem = {
  title: "Setup",
  body: (
    <div style={{ whiteSpace: "pre-line" }}>
      <div>Please set up your table before the event.</div>
      <div>
        <div> Facilities will be open:</div>
        <div>
          <strong>Sunday, August 23 | 10am–1pm</strong>
        </div>
        <div>
          <strong>Monday, August 24 | 8:30am until event start</strong>
        </div>
        <br />
      </div>
      <div>
        You will receive your table number during sign-in. Tables are 8’ and
        will have two chairs. Please provide your own tablecloth, display items,
        and/or promotional materials.
      </div>
      <br />
      <div>
        EmployNV staff will greet you and assist with setup. If you need support
        during the event, our staff will be available and circulating throughout
        the space.
      </div>
    </div>
  ),
};

const EMPLOYER_ITEMS: ExpectItem[] = [
  {
    title: "Power & Wi-Fi",
    body: `We cannot guarantee power or Wi‑Fi access. If you plan to use a laptop, we recommend bringing a hotspot. Printers will not be available onsite.`,
  },
  {
    title: "Job opening requirement",
    body: `Career seekers will receive a list of employers with current job openings. Failure to provide at least one job opening to EmployNV.gov before the event could result in removal from the event.`,
  },
  {
    title: "On-site interviews",
    body: `We will provide space for employers to conduct interviews with candidates at the event if desired.`,
  },
  {
    title: "Interview follow-up",
    body: `The career fair aims to facilitate on-site interviews where possible. If follow-up interviews will be at your company’s locations, please advise applicants.`,
  },
  {
    title: "Time commitment",
    body: `We ask that all employer representatives remain for the full duration of the career fair. We encourage you to bring food and drinks to stay comfortable throughout the event.`,
  },
  {
    title: "Employer survey",
    body: `At the end of the event, we’ll ask you to complete a brief survey. Your feedback helps us improve future events and better serve both employers and job seekers.`,
  },
];

function EmployerSetupCard({ item }: { item: ExpectItem }) {
  return (
    <div className="lg:w-72 lg:shrink-0 xl:w-80">
      <p className="font-slab text-lg font-bold text-brand-yellow">
        {item.title}
      </p>
      <div className="mt-1 whitespace-pre-line text-sm leading-relaxed text-brand-light sm:text-base">
        {item.body}
      </div>
    </div>
  );
}

function ExpectGrid({
  items,
  className = "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
}: {
  items: ExpectItem[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.title}>
          <p className="font-slab text-lg font-bold text-brand-yellow">
            {item.title}
          </p>
          <div className="mt-1 whitespace-pre-line text-sm leading-relaxed text-brand-light sm:text-base">
            {item.body}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function WhatToExpect() {
  return (
    <section className="flex flex-1 flex-col justify-center bg-brand-dark px-6 py-10 sm:px-10 lg:px-16">
      <div className="group mx-auto max-w-6xl">
        <h2 className="font-slab text-2xl font-bold text-brand-yellow sm:text-3xl lg:text-4xl">
          What to Expect
        </h2>

        <div className="mt-6 inline-flex gap-1 rounded-full bg-white/10 p-1">
          <input
            type="radio"
            name="wte-audience"
            id="wte-jobseekers"
            className="peer/js sr-only"
            defaultChecked
          />
          <label
            htmlFor="wte-jobseekers"
            className="cursor-pointer rounded-full px-4 py-1.5 text-sm font-bold text-brand-light transition-colors peer-checked/js:bg-brand-yellow peer-checked/js:text-brand-dark peer-not-checked/js:hover:bg-white/10 peer-not-checked/js:hover:text-white peer-focus-visible/js:ring-2 peer-focus-visible/js:ring-brand-yellow sm:text-base"
          >
            Job Seekers
          </label>

          <input
            type="radio"
            name="wte-audience"
            id="wte-employers"
            className="peer/emp sr-only"
          />
          <label
            htmlFor="wte-employers"
            className="cursor-pointer rounded-full px-4 py-1.5 text-sm font-bold text-brand-light transition-colors peer-checked/emp:bg-brand-yellow peer-checked/emp:text-brand-dark peer-not-checked/emp:hover:bg-white/10 peer-not-checked/emp:hover:text-white peer-focus-visible/emp:ring-2 peer-focus-visible/emp:ring-brand-yellow sm:text-base"
          >
            Employers
          </label>
        </div>

        <div className="mt-8 hidden group-has-[#wte-jobseekers:checked]:block">
          <ExpectGrid items={JOB_SEEKER_ITEMS} />
        </div>
        <div className="mt-8 hidden flex-col gap-8 group-has-[#wte-employers:checked]:flex lg:flex-row">
          <EmployerSetupCard item={EMPLOYER_SETUP} />
          <ExpectGrid
            items={EMPLOYER_ITEMS}
            className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2"
          />
        </div>
      </div>
    </section>
  );
}

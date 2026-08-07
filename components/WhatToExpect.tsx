import Collapse from "./ui/Collapse";
type ExpectItem = {
  index: string;
  body: string | React.ReactNode;
};

const JOB_SEEKER_ITEMS: ExpectItem[] = [
  {
    index: "1",
    body: (
      <Collapse title="Take time to prepare for this event" className="">
        <div style={{ whiteSpace: "pre-line" }}>
          <ul className="ml-5 ">
            <li className="list-disc">
              Visit an <strong>EmployNV Career Hub</strong> for assistance in
              optimizing your resume.
            </li>
            <li>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Reno - 4001 S Virginia St #8, Reno, NV 89502</li>
                <li>Sparks - 2281 Pyramid Way, Sparks, NV 89431</li>
                <li>Fernley - 1320 W Newlands Dr, Fernley, NV 89408</li>
                <li>Carson - 1929 N Carson St, Carson City, NV 89701</li>
              </ul>
            </li>
            <li className="list-disc mt-2">
              Attend the <strong>Career Readiness Fair</strong> on August 12,
              2026 at the Reno Town Mall (4001 S. Virgina St., Reno, NV 89502)
              to connect with community resources and improve your chances of
              finding the perfect job.
            </li>
          </ul>
        </div>
      </Collapse>
    ),
  },

  {
    index: "2",
    body: (
      <Collapse title="Respect the process">
        <div style={{ whiteSpace: "pre-line" }}>
          <ul className="ml-5 ">
            <li className="list-disc">
              Employers will follow up directly with candidates they’re
              interested in
            </li>
            <li className="list-disc">
              Please do not sign in for someone else
            </li>
            <li className="list-disc">
              If a friend or peer couldn’t attend, encourage them to visit their
              nearest EmployNV Career Hub
            </li>
            <li className="list-disc">
              Career seekers can also explore opportunities online at{" "}
              <a
                href="https://www.EmployNV.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-yellow underline cursor-pointer hover:text-brand-light"
              >
                www.EmployNV.gov
              </a>
            </li>
          </ul>
        </div>
      </Collapse>
    ),
  },
  {
    index: "3",
    body: (
      <Collapse title="Engage with employers professionally">
        <div style={{ whiteSpace: "pre-line" }}>
          <ul className="ml-5 ">
            <li className="list-disc">Share a copy of your resume</li>
            <li className="list-disc">Ask about current openings </li>
            <li className="list-disc">
              Express your interests and career goals{" "}
            </li>
            <li className="list-disc">
              This is a great opportunity to build relationships that could lead
              to future employment{" "}
            </li>
          </ul>
        </div>
      </Collapse>
    ),
  },

  {
    index: "4",
    body: (
      <Collapse title="Register at the EmployNV tables at entry">
        <div style={{ whiteSpace: "pre-line" }}>
          <ul className="ml-5 ">
            <li className="list-disc">
              Scan the QR code to get the Open Jobs list which includes
              participating employers and their available positions.
            </li>
          </ul>
        </div>
      </Collapse>
    ),
  },
  {
    index: "5",
    body: (
      <Collapse title="Treat it like an interview">
        <div style={{ whiteSpace: "pre-line" }}>
          <ul className="ml-5 ">
            <li className="list-disc">
              You only get one chance to make a first impression. Dress
              professionally, be prepared, and stay focused.
            </li>
          </ul>
        </div>
      </Collapse>
    ),
  },
  {
    index: "6",
    body: (
      <Collapse title="Bring plenty of updated resumes">
        <div style={{ whiteSpace: "pre-line" }}>
          <ul className="ml-5 ">
            <li className="list-disc">
              If you need help creating or printing resumes, visit the Resource
              Center upstairs at the EmployNV Career Hub.
            </li>
          </ul>
        </div>
      </Collapse>
    ),
  },
  {
    index: "7",
    body: (
      <Collapse title="Showcase your best self">
        <div style={{ whiteSpace: "pre-line" }}>
          <ul className="ml-5 ">
            <li className="list-disc">
              Smile, show genuine interest, maintain eye contact, and be
              confident. Your goal is to leave a lasting impression that leads
              to a future interview.
            </li>
          </ul>
        </div>
      </Collapse>
    ),
  },
];

const EMPLOYER_SETUP: ExpectItem = {
  index: "1",
  body: (
    <Collapse title="Setup">
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
          will have two chairs. Please provide your own tablecloth, display
          items, and/or promotional materials.
        </div>
        <br />
        <div>
          EmployNV staff will greet you and assist with setup. If you need
          support during the event, our staff will be available and circulating
          throughout the space.
        </div>
      </div>
    </Collapse>
  ),
};

const EMPLOYER_ITEMS: ExpectItem[] = [
  {
    index: "2",
    body: (
      <Collapse title="Power & Wi-Fi">
        <div style={{ whiteSpace: "pre-line" }}>
          We cannot guarantee power or Wi‑Fi access. If you plan to use a
          laptop, we recommend bringing a hotspot. Printers will not be
          available onsite.
        </div>
      </Collapse>
    ),
  },
  {
    index: "3",
    body: (
      <Collapse title="Job opening requirement">
        <div style={{ whiteSpace: "pre-line" }}>
          Career seekers will receive a list of employers with current job
          openings. Failure to provide at least one job opening to EmployNV.gov
          before the event could result in removal from the event.
        </div>
      </Collapse>
    ),
  },
  {
    index: "4",
    body: (
      <Collapse title="On-site interviews">
        <div style={{ whiteSpace: "pre-line" }}>
          We will provide space for employers to conduct interviews with
          candidates at the event if desired.
        </div>
      </Collapse>
    ),
  },
  {
    index: "5",
    body: (
      <Collapse title="Interview follow-up">
        <div style={{ whiteSpace: "pre-line" }}>
          The career fair aims to facilitate on-site interviews where possible.
          If follow-up interviews will be at your company’s locations, please
          advise applicants.
        </div>
      </Collapse>
    ),
  },
  {
    index: "6",
    body: (
      <Collapse title="Time commitment">
        <div style={{ whiteSpace: "pre-line" }}>
          We ask that all employer representatives remain for the full duration
          of the career fair. We encourage you to bring food and drinks to stay
          comfortable throughout the event.
        </div>
      </Collapse>
    ),
  },
  {
    index: "7",
    body: (
      <Collapse title="Employer survey">
        <div style={{ whiteSpace: "pre-line" }}>
          At the end of the event, we’ll ask you to complete a brief survey.
          Your feedback helps us improve future events and better serve both
          employers and job seekers.
        </div>
      </Collapse>
    ),
  },
];

function EmployerSetupCard({ item }: { item: ExpectItem }) {
  return (
    <div className="lg:w-72 lg:shrink-0 xl:w-80">
      <div className="mt-1 whitespace-pre-line text-sm leading-relaxed text-brand-light sm:text-base">
        {item.body}
      </div>
    </div>
  );
}

function ExpectGrid({
  items,
  className = "flex flex-1 flex-col gap-2 lg:gap-4 sm:grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2",
}: {
  items: ExpectItem[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item.index} className="min-w-0">
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
      <div className="group mx-auto w-full max-w-6xl">
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
        <div className="mt-8 hidden flex-col  group-has-[#wte-employers:checked]:flex lg:flex-row">
          <EmployerSetupCard item={EMPLOYER_SETUP} />
          <ExpectGrid items={EMPLOYER_ITEMS} />
        </div>
      </div>
    </section>
  );
}

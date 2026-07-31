type ExpectItem = {
  title: string;
  body: string;
};

const JOB_SEEKER_ITEMS: ExpectItem[] = [
  {
    title: "PLACEHOLDER CONTENT: Bring your resume",
    body: "Bring multiple copies of your resume.",
  },
  {
    title: "Dress to impress",
    body: "Dress professionally and bring a positive attitude.",
  },
  {
    title: "Meet employers",
    body: "Meet face-to-face with 90+ hiring employers.",
  },
  {
    title: "Free career coaching",
    body: "Access free on-site career coaching and resume help.",
  },
];

const EMPLOYER_ITEMS: ExpectItem[] = [
  {
    title: "Setup",
    body: "Facilities open Sunday, August 23 (10am–1pm) and Monday, August 24 (8:30am until event start). You'll get your table number at sign-in — tables are 8' with two chairs, so bring your own tablecloth and display materials. EmployNV staff will help with setup and circulate throughout the event.",
  },
  {
    title: "Power & Wi-Fi",
    body: "We cannot guarantee power or Wi-Fi access. If you plan to use a laptop, bring a hotspot. Printers will not be available on-site.",
  },
  {
    title: "Job Opening Requirement",
    body: "Job seekers receive a list of employers with current openings. Employers must post at least one opening to EmployNV.gov before the event, or risk removal from the event.",
  },
  {
    title: "On-site Interviews",
    body: "We provide space for employers who want to conduct interviews with candidates at the event.",
  },
  {
    title: "Interview Follow-Up",
    body: "We aim to facilitate on-site interviews where possible. If follow-up interviews will be at your company's location, please advise applicants.",
  },
  {
    title: "Time Commitment",
    body: "We ask that all employer representatives stay for the full event. We encourage you to bring food and drinks to stay comfortable.",
  },
  {
    title: "Employer Survey",
    body: "At the end of the event, we'll ask you to complete a brief survey. Your feedback helps us improve future events for employers and job seekers alike.",
  },
];

function ExpectGrid({ items }: { items: ExpectItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title}>
          <p className="font-slab text-lg font-bold text-brand-yellow">
            {item.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-brand-light sm:text-base">
            {item.body}
          </p>
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
            className="cursor-pointer rounded-full px-4 py-1.5 text-sm font-bold text-brand-light peer-checked/js:bg-brand-yellow peer-checked/js:text-brand-dark peer-focus-visible/js:ring-2 peer-focus-visible/js:ring-brand-yellow sm:text-base"
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
            className="cursor-pointer rounded-full px-4 py-1.5 text-sm font-bold text-brand-light peer-checked/emp:bg-brand-yellow peer-checked/emp:text-brand-dark peer-focus-visible/emp:ring-2 peer-focus-visible/emp:ring-brand-yellow sm:text-base"
          >
            Employers
          </label>
        </div>

        <div className="mt-8 hidden group-has-[#wte-jobseekers:checked]:block">
          <ExpectGrid items={JOB_SEEKER_ITEMS} />
        </div>
        <div className="mt-8 hidden group-has-[#wte-employers:checked]:block">
          <ExpectGrid items={EMPLOYER_ITEMS} />
        </div>
      </div>
    </section>
  );
}

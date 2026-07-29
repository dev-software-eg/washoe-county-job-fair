const COLUMNS = [
  {
    heading: "Job Seekers",
    items: [
      "Bring multiple copies of your resume",
      "Dress professionally and bring a positive attitude",
      "Meet face-to-face with 90+ hiring employers",
      "Access free on-site career coaching and resume help",
    ],
  },
  {
    heading: "Employers",
    items: [
      "Meet qualified, motivated local candidates",
      "Bring materials on open roles and company culture",
      "Conduct on-the-spot interviews and job offers",
      "Connect with career coaches and workforce partners",
    ],
  },
];

export default function WhatToExpect() {
  return (
    <section className="flex flex-1 flex-col justify-center bg-brand-dark px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-slab text-2xl font-bold text-brand-yellow sm:text-3xl lg:text-4xl">
          What to Expect
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="font-slab text-xl font-bold text-white sm:text-2xl">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-brand-light sm:text-base">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

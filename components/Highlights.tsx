const ITEMS = [
  {
    title: "90+ employers",
    body: "Will be on site looking to hire",
  },
  {
    title: "On-the-spot offers",
    body: "Potential on-the-spot interviews and job offers",
  },
  {
    title: "Every industry",
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

export default function Highlights() {
  return (
    <section className="flex flex-1 flex-col justify-center bg-brand-dark px-6 py-10 sm:px-10 lg:px-16">
      <h2 className="sr-only">Career fair highlights</h2>
      <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <li key={item.title}>
            <p className="font-slab text-lg font-bold text-brand-yellow">
              {item.title}
            </p>
            <p className="mt-1 text-md leading-relaxed text-brand-light">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

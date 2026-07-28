import Image from "next/image";
import signPostImage from "../logos/road-sign.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue px-6 pt-6 pb-10 sm:px-10 lg:px-16 lg:pt-10">
      <div className="mx-auto max-w-6xl lg:pr-72">
        <div className="max-w-2xl">
          <p className="font-slab text-xl text-white sm:text-2xl">
            Northern Nevada&rsquo;s Largest
          </p>

          <div className="mt-4 inline-block bg-brand-dark px-4 py-3">
            <h1 className="font-slab text-2xl font-bold sm:text-3xl lg:text-4xl">
              <span className="text-brand-yellow underline">NO</span>
              <span className="text-brand-yellow">-COST </span>
              <span className="text-white">CAREER FAIR</span>
            </h1>
          </div>

          <p className="mt-6 text-base font-bold text-brand-yellow sm:text-lg">
            MONDAY, AUGUST 24, 2026{" "}
            <span className="font-normal">| 11am&ndash;2pm</span>
          </p>

          <p className="mt-6 text-sm leading-relaxed text-brand-light sm:text-base">
            Reno-Sparks Convention Center
            <br />
            4590 S Virginia St, Reno, NV
          </p>

          <h2 className="mt-6 text-base font-bold text-white sm:text-lg">
            This is the event that starts your next chapter!{" "}
            <span className="font-bold italic text-brand-yellow">
              Don&rsquo;t miss it.
            </span>
          </h2>

          <a
            href="#"
            className="mt-8 inline-block rounded bg-brand-yellow px-8 py-3 text-base font-bold text-brand-dark shadow-sm transition hover:brightness-95"
          >
            Register
          </a>
        </div>
      </div>
      <div className="hidden lg:absolute lg:top-0 lg:-right-1 lg:block lg:w-72">
        <Image
          src={signPostImage}
          alt="Signpost pointing to industries hiring: health care, education, mining, skilled trades, manufacturing, logistics, hospitality, government"
          className="h-auto w-full"
          priority
        />
      </div>
    </section>
  );
}

import Image from "next/image";
import signPostImage from "../logos/road-sign.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue px-6 pt-0 pb-15 hero-md:pt-15 hero-md:px-5 3xl:px-16! min-h-140">
      <div className="relative z-0 mx-auto mt-5 block w-40 hero-md:absolute hero-md:mt-0 hero-md:mx-0 hero-md:top-15 hero-md:right-48 hero-md:w-72 3xl:top-55! 3xl:left-30! 3xl:right-auto!">
        <Image
          src="/logos/wc-seal.png"
          loading="eager"
          alt="Washoe County seal"
          width={598}
          height={598}
          className="h-62 w-auto object-contain"
        />
      </div>
      <div className="hidden hero-md:absolute hero-md:top-60 hero-md:-right-1 hero-md:z-0 hero-md:block hero-md:w-72">
        <Image
          src={signPostImage}
          alt="Signpost pointing to industries hiring: health care, education, mining, skilled trades, manufacturing, logistics, hospitality, government"
          className="h-auto w-full"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl text-center hero-md:mx-0 hero-md:text-left 3xl:mx-auto! 3xl:text-center!">
        <div className="mx-auto max-w-2xl hero-md:mx-0 3xl:mx-auto!">
          <p className="font-slab font-bold text-2xl text-white sm:text-3xl mb-2">
            Washoe County Job Fair
          </p>
          <p className="font-slab text-2xl text-white sm:text-3xl">
            Northern Nevada&rsquo;s Largest
          </p>

          <div className="mt-4 inline-block bg-brand-dark px-4 py-3">
            <h1 className="font-slab text-3xl font-bold lg:text-5xl md:text-4xl">
              <span className="text-brand-yellow underline">NO</span>
              <span className="text-brand-yellow">-COST </span>
              <span className="text-white">CAREER FAIR</span>
            </h1>
          </div>

          <p className="mt-6 text-xl font-bold text-brand-yellow sm:text-2xl lg:text-3xl">
            MONDAY, AUGUST 24, 2026{" "}
            <span className="font-normal">| 11am&ndash;2pm</span>
          </p>

          <p className="mt-6 text-2xl leading-relaxed text-brand-light ">
            <a
              href="https://maps.google.com/?q=Reno-Sparks+Convention+Center,+4590+S+Virginia+St,+Reno,+NV"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Reno-Sparks Convention Center
              <br />
              4590 S Virginia St, Reno, NV
              <span className="sr-only"> (opens in Google Maps)</span>
            </a>
          </p>

          <h2 className="mt-6 text-2xl font-bold text-white sm:text-2xl ">
            This is the event that starts your next chapter!{" "}
            <span className="font-bold italic text-brand-yellow">
              Don&rsquo;t miss it.
            </span>
          </h2>

          <div>
            <h3 className="mt-6 text-lg font-bold text-brand-light sm:text-xl lg:text-2xl">
              For more information, contact:
            </h3>
            <span className="text-lg text-brand-light sm:text-lg lg:text-xl block pt-2">
              <a
                href="tel:+17752849660"
                className="underline"
                aria-label="Call 775-284-9660"
              >
                775-284-9660
              </a>{" "}
              <span aria-hidden="true">|</span>{" "}
              <a
                href="mailto:biz-hub@detr.nv.gov"
                className="underline"
                aria-label="Email biz-hub@detr.nv.gov"
              >
                biz-hub@detr.nv.gov
              </a>
            </span>
          </div>
          <Link
            className="mt-12 inline-block px-8 py-4 cursor-pointer rounded-full font-slab text-lg font-bold text-brand-dark bg-brand-yellow transition-colors hover:bg-white sm:text-xl lg:text-2xl"
            target="_blank"
            rel="noopener noreferrer"
            href="https://washoecountyjobfair.eventbrite.com/"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
}

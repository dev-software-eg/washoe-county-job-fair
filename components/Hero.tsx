import Image from "next/image";
import signPostImage from "../logos/road-sign.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue px-6 pt-15 pb-5 sm:px-30 lg:px-16 lg:pt-15 min-h-140">
      <div className="hidden lg:absolute lg:top-40 lg:left-30 lg:z-0 lg:block lg:w-72 md:absolute md:top-40 md:left-30 md:z-0 md:block md:w-72">
        <Image
          src="/logos/wc-seal.png"
          alt="Washoe County seal"
          width={598}
          height={598}
          className="h-62 w-auto object-contain"
        />
      </div>
      <div className="hidden lg:absolute lg:top-30 lg:-right-1 lg:z-0 lg:block lg:w-72 md:absolute md:top-30 md:-right-1 md:z-0 md:block md:w-72">
        <Image
          src={signPostImage}
          alt="Signpost pointing to industries hiring: health care, education, mining, skilled trades, manufacturing, logistics, hospitality, government"
          className="h-auto w-full"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl text-center ">
        {/* line block background */}
        {/* <div className="mx-auto max-w-2xl ">
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

          <p className="mt-6 inline-block text-xl font-bold text-brand-yellow sm:text-2xl lg:text-3xl bg-brand-blue">
            MONDAY, AUGUST 24, 2026{" "}
            <span className="font-normal">| 11am&ndash;2pm</span>
          </p>

          <p className="mt-6 inline-block text-2xl leading-relaxed text-brand-light bg-brand-blue">
            Reno-Sparks Convention Center
            <br />
            4590 S Virginia St, Reno, NV
          </p>

          <h2 className="mt-6 inline-block text-2xl font-bold text-white sm:text-2xl bg-brand-blue">
            This is the event that starts your next chapter!{" "}
            <span className="font-bold italic text-brand-yellow">
              Don&rsquo;t miss it.
            </span>
          </h2>

          <div>
            <h3 className="mt-6 inline-block text-lg font-bold text-brand-light sm:text-xl lg:text-2xl pt-4 bg-brand-blue">
              For more information, contact:
            </h3>
            <span className="text-lg text-brand-light sm:text-lg lg:text-xl block pt-2">
              775-284-9660 | biz-hub@detr.nv.gov
            </span>
          </div>
        </div> */}
        {/* full block background */}
        <div className="mx-auto max-w-2xl bg-brand-blue">
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
            Reno-Sparks Convention Center
            <br />
            4590 S Virginia St, Reno, NV
          </p>

          <h2 className="mt-6 text-2xl font-bold text-white sm:text-2xl ">
            This is the event that starts your next chapter!{" "}
            <span className="font-bold italic text-brand-yellow">
              Don&rsquo;t miss it.
            </span>
          </h2>

          <div>
            <h3 className="mt-6 text-lg font-bold text-brand-light sm:text-xl lg:text-2xl pt-4">
              For more information, contact:
            </h3>
            <span className="text-lg text-brand-light sm:text-lg lg:text-xl block pt-2">
              775-284-9660 |{" "}
              <a href="mailto:biz-hub@detr.nv.gov">biz-hub@detr.nv.gov</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

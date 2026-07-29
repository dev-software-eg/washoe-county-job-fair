import Image from "next/image";
import signPostImage from "../logos/road-sign.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue px-6 pt-0 pb-5 md:pt-15 md:px-5 3xl:px-16! min-h-140">
      <div className="relative z-0 mx-auto mt-5 block w-40 md:absolute md:mt-0 md:mx-0 md:top-5 md:right-48 md:w-72 3xl:top-40! 3xl:left-30! 3xl:right-auto!">
        <Image
          src="/logos/wc-seal.png"
          alt="Washoe County seal"
          width={598}
          height={598}
          className="h-62 w-auto object-contain"
        />
      </div>
      <div className="hidden md:absolute md:top-30 md:-right-1 md:z-0 md:block md:w-72">
        <Image
          src={signPostImage}
          alt="Signpost pointing to industries hiring: health care, education, mining, skilled trades, manufacturing, logistics, hospitality, government"
          className="h-auto w-full"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl text-center md:mx-0 md:text-left 3xl:mx-auto! 3xl:text-center!">
        <div className="mx-auto max-w-2xl md:mx-0 3xl:mx-auto!">
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

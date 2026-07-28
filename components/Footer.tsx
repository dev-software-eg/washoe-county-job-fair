import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-dark px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p className="text-xs italic text-white">In partnership with</p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Image
            src="/logos/employnv.png"
            alt="EmployNV"
            width={935}
            height={248}
            className="h-10 w-auto object-contain"
          />
          <Image
            src="/logos/wc-seal.png"
            alt="Washoe County seal"
            width={598}
            height={598}
            className="h-16 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}

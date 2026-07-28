import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col justify-center bg-brand-dark px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        {/* <p className="text-md italic text-white">In partnership with</p> */}
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
           <Image
            src="/logos/wc-seal.png"
            alt="Washoe County seal"
            width={598}
            height={598}
            className="h-32 w-auto object-contain"
          />
          <Image
            src="/logos/in-partnership-with.png"
            alt="In partnership with"
            width={598}
            height={598}
            className="h-4 w-auto object-contain"
          />
          <Image
            src="/logos/employnv-single.png"
            alt="EmployNV"
            width={935}
            height={248}
            className="h-24 w-auto object-contain"
          />
         
        </div>
      </div>
    </footer>
  );
}

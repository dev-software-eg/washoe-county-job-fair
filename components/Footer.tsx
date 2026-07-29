import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col justify-center bg-brand-dark px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
          <a
            href="https://www.employnv.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logos/employnv.png"
              alt="EmployNV — An American Job Center of Nevada"
              width={935}
              height={248}
              className="h-24 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

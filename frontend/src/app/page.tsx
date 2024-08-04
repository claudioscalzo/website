import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid items-left min-h-screen p-16">
      <main className="flex flex-col gap-8 row-start-2 max-w-xl items-left">
        <div className="absolute top-0 right-0 md:-right-60 lg:-right-0">
          <Image
            className="h-screen w-full hidden md:block"
            src="/profile.jpeg"
            alt="Profile picture"
            width={2538}
            height={3384}
            quality={50}
            priority
          />
        </div>
        <div className="font-mono font-medium text-4xl text-left sm:text-5xl">
          Hi there!<br/>
          I'm Claudio.
        </div>
        <ul className="font-mono font-light list-outside text-xl text-left sm:text-2xl">
          <li>💻 engineer <a className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded" href="https://bendingspoons.com" target="_blank" rel="noopener noreferrer">@bendingspoons</a></li>
          <li>🎾 tennis enthusiast</li>
          <li>🏎️ formula 1 fan</li>
          <li>🇮🇹 italian</li>
          <li>🍕 foodie</li>
        </ul>
        <div className="flex gap-4 items-left flex-row">
          <a
            href="https://linkedin.com/in/claudioscalzo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transition duration-300 ease-in-out transform hover:scale-110 hover:filter hover:brightness-75">
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={40}
              height={40}
            />
            </div>
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file-text.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

import Calendar from "../icons/Calendar";
import MotoGp from "../icons/MotoGp";
import Trophy from "../icons/Trophy";

const Hero = () => {
  return (
    <div className="flex lg:m-4  lg:bg-gradient-to-b from-neutral-200 dark:from-neutral-950 to-transparent  lg:rounded-2xl h-[calc(100svh-2rem)] overflow-hidden  flex-col relative ">
      <div className="absolute pointer-events-none animate-fade-in bg-ambientLight left-0 top-0 h-[1380px] w-[560px] rounded-full translate-y-[-350px] rotate-[-45deg]"></div>
      <div className="absolute pointer-events-none animate-fade-in bg-ambientLight3 left-0 top-0 h-[1380px] w-[240px] rounded-full translate-y-[-70%] translate-x-[-180%] rotate-[-45deg]"></div>
      <div className="absolute pointer-events-none animate-fade-in bg-ambientLight2 left-0 top-0 h-[1380px] w-[240px] rounded-full translate-y-[-50%] translate-x-[5%] rotate-[-45deg]"></div>
      <div className="z-[5]  pointer-events-none absolute inset-0 flex w-screen items-center justify-center overflow-hidden [mask-image:radial-gradient(transparent_15%,white)]">
        <svg
          className="absolute z-[5]   left-0 top-0 size-full stroke-black/10 dark:stroke-white/20 stroke-[1] [mask-image:linear-gradient(transparent_15%,white,transparent_85%)]"
          data-n-ids='{"1a4MN34vH0:0":"1a4MN34vH0:0"}'
        >
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#grid-pattern-1a4MN34vH0:0)"
          ></rect>
          <svg>
            <rect
              strokeWidth="0"
              width="95"
              height="95"
              x="97"
              y="97"
              className="pointer-events-auto fill-black/5 hover:fill-black/10 dark:fill-white/20 dark:hover:fill-white/30  transition duration-500"
            ></rect>
            <rect
              strokeWidth="0"
              width="95"
              height="95"
              x="385"
              y="193"
              className="pointer-events-auto fill-black/5 hover:fill-black/10 dark:fill-white/20 dark:hover:fill-white/30  transition duration-500"
            ></rect>
            <rect
              strokeWidth="0"
              width="95"
              height="95"
              x="193"
              y="289"
              className="pointer-events-auto fill-black/5 hover:fill-black/10 dark:fill-white/20 dark:hover:fill-white/30  transition duration-500"
            ></rect>
            <rect
              strokeWidth="0"
              width="95"
              height="95"
              x="673"
              y="289"
              className="pointer-events-auto fill-black/5 hover:fill-black/10 dark:fill-white/20 dark:hover:fill-white/30  transition duration-500"
            ></rect>
            <rect
              strokeWidth="0"
              width="95"
              height="95"
              x="481"
              y="385"
              className="pointer-events-auto fill-black/5 hover:fill-black/10 dark:fill-white/20 dark:hover:fill-white/30  transition duration-500"
            ></rect>
            <rect
              strokeWidth="0"
              width="95"
              height="95"
              x="1249"
              y="97"
              className="pointer-events-auto fill-black/5  hover:fill-black/10 dark:fill-white/20 dark:hover:fill-white/30  transition duration-500"
            ></rect>
            <rect
              strokeWidth="0"
              width="95"
              height="95"
              x="1"
              y="481"
              className="pointer-events-auto fill-black/5  hover:fill-black/10 dark:fill-white/20 dark:hover:fill-white/30  transition duration-500"
            ></rect>
            <rect
              strokeWidth="0"
              width="95"
              height="95"
              x="577"
              y="481"
              className="pointer-events-auto fill-black/5 hover:fill-black/10 dark:fill-white/20 dark:hover:fill-white/30  transition duration-500"
            ></rect>
            <rect
              strokeWidth="0"
              width="95"
              height="95"
              x="1441"
              y="385"
              className="pointer-events-auto fill-black/5 hover:fill-black/10 dark:fill-white/20 dark:hover:fill-white/30  transition duration-500"
            ></rect>
            <rect
              strokeWidth="0"
              width="95"
              height="95"
              x="1057"
              y="289"
              className="pointer-events-auto fill-black/5 hover:fill-black/10 dark:fill-white/20 dark:hover:fill-white/30  transition duration-500"
            ></rect>
            <rect
              strokeWidth="0"
              width="95"
              height="95"
              x="961"
              y="481"
              className="pointer-events-auto fill-black/5 hover:fill-black/10 dark:fill-white/20 dark:hover:fill-white/30  transition duration-500"
            ></rect>
            <rect
              strokeWidth="0"
              width="95"
              height="95"
              x="1249"
              y="577"
              className="pointer-events-auto fill-muted/5 transition duration-500 hover:fill-white/10  "
            ></rect>
          </svg>
          <defs>
            <pattern
              id="grid-pattern-1a4MN34vH0:0"
              viewBox="0 0 64 64"
              width="96"
              height="96"
              patternUnits="userSpaceOnUse"
            >
              <path d="M64 0H0V64" fill="none"></path>
            </pattern>
          </defs>
        </svg>
      </div>
      <div className="h-full ">
        <div className="text-center relative h-full space-y-4 max-lg:px-4 flex flex-col items-center justify-center">
          <div style={{ opacity: 1, transform: "none", fontFamily: "Geist" }}>
            <div className="font-clash text-[clamp(1.8rem,5vw,4.5rem)] leading-[100%] font-medium space-y-4 pb-4">
              <p>Conoce toda la actualidad sobre </p>
                {" "}
                <div className="mx-auto text-black p-2 py-5 rounded-[20px] bg-gradient-to-r from-[#ffde65] to-[#fdb600] w-fit text-center rotate-2 ">
                  <MotoGp className="w-[20rem] -rotate-2" />
                </div>
            </div>
          </div>
          <div style={{ opacity: 1, transform: "none" }}>
            <h4 className="font-geist scroll-m-20 text-xl tracking-tight !leading-tight font-normal text-balance text-muted-foreground dark:gradient-to-transparent">
              Toda la información sobre carreras, pilotos y equipos. Con
              estadísticas y mucho más!. ✨
            </h4>
          </div>
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="flex items-center gap-2 mt-4 ">
              <a
                className="inline-flex text-black items-center justify-center gap-2 whitespace-nowrap text-base font-semibold ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-gradient-to-tr from-[#ffde65] to-[#fdb600]  shadow-innerGlow  transition-all duration-300 hover:ring-1 hover:ring-[#ffde65] hover:ring-offset-2 h-12 rounded-md px-4 group overflow-hidden"
                href="#"
              >
                <div className="font-clash translate-y-0 overflow-hidden font-medium flex flex-row gap-2 items-center opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
                  <Trophy />
                  Ver campeonato
                </div>
                <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-down"
                  >
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                  </svg>
                </div>
              </a>
              <a
                rel="noreferrer"
                className="font-clash inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-neutral-900 hover:bg-neutral-800 text-secondary-foreground h-12 rounded-md px-6  backdrop-blur"
                href="/motogp/calendar"
              >
                <Calendar className="w-5 h-5 text-white" />
                Ver calendario
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;
import Calendar from "../icons/Calendar";
import Github from "../icons/Github";
import Helmet from "../icons/Helmet";
import Medal from "../icons/Medal";
import Teams from "../icons/Teams";

export default function Header() {
  const logo = (
    <svg
      version="1.2"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 228 198"
      className="h-9 w-auto"
      xmlns="http://www.w3.org/2000/svg"
      width="228"
      height="198"
    >
      <g>
        <path
          fill="#199afc"
          d="M73.2 126.4c-15 15-15 39.3 0 54.3L19 126.4C4 111.5 4 87.2 19 72.2L73.2 18c15-15 39.2-15 54.2 0s15 39.2 0 54.2z"
        ></path>
        <path
          fill="#1d5682"
          d="m73.2 126.4 27.1-27.1 27.1 27.1c15 15 15 39.3 0 54.3-15 14.9-39.2 14.9-54.2 0-15-15-15-39.3 0-54.3z"
        ></path>
        <g>
          <path
            fill="#199afc"
            d="M185.5 84.3c8.3-8.2 8.3-21.7 0-29.9l30 29.9c8.2 8.3 8.2 21.7 0 30l-30 30c-8.3 8.3-21.7 8.3-30 0s-8.3-21.7 0-30z"
          ></path>
          <path
            fill="#1d5682"
            d="m185.5 84.3-15 15-15-15c-8.3-8.2-8.3-21.7 0-29.9 8.3-8.3 21.7-8.3 30 0 8.3 8.2 8.3 21.7 0 29.9z"
          ></path>
        </g>
      </g>
    </svg>
  );

  const menuOptions = [
    {
      href: "/motogp/standings",
      label: "Clasificación",
      icon: <Medal className="size-5 text-white" />,
    },
    {
      href: "motogp/riders",
      label: "Pilotos",
      icon: (
        <Helmet className="size-5 -rotate-12" />
      ),
    },
    {
      href: "/motogp/calendar",
      label: "Calendario",
      icon: <Calendar className="size-5 text-white" />,
    },
    {
      href: null,
      label: "Equipos",
      icon: (
        <Teams className="size-5 text-white/55" />
      ),
      upcoming: true,
    },
  ];

  return (
    <header className="header-animate backdrop-blur-[10px] font-inter max-w-7xl mx-auto md:backdrop-blur-0 w-full mb-10 overflow-visible z-[99999] py-6">
      <div className="grid items-center justify-center md:justify-normal w-full grid-cols-[auto_1fr] mx-auto text-white gap-x-10 md:flex max-w-screen-full">
        <div className="md:flex-grow md:basis-0 flex justify-start">
          <a
            href="/motogp"
            className="ml-4 flex items-center gap-2.5 font-bold transition-transform duration-300 hover:scale-105"
            title="Ir a la página principal"
            aria-label="Ir a la página principal"
          >
            {logo}
            <span className="hidden lg:block text-3xl font-montserrat">
              racingStats
            </span>{" "}
            <span className="text-[10px] opacity-90 uppercase font-semibold py-0.5 px-1.5 rounded-md bg-gradient-to-l from-[#09f] to-[#6fc6ff] via-[#09f] border border-[#09f] block leading-none">
              Beta
            </span>{" "}
          </a>{" "}
        </div>{" "}
        <nav
          id="header-navbar"
          className="col-span-full overflow-x-auto row-[2/3] grid grid-rows-[0fr] transition-[grid-template-rows] data-[open]:grid-rows-[1fr] md:justify-center md:flex group/nav"
        >
          <ul
            data-header-navbar=""
            className="flex flex-col items-center overflow-x-hidden overflow-y-hidden md:flex-row gap-x-2"
          >
            {menuOptions.map((option, index) => (
              <li
                key={index}
                className="flex justify-center w-full first:mt-5 md:first:mt-0 md:block md:w-auto"
              >
                {option.href ? (
                  <a
                    href={option.href}
                    className="flex items-center md:w-auto justify-center gap-2 md:px-4 md:py-2 hover:bg-[#1a1a1a] md:rounded-2xl border border-transparent hover:border-[#2b2b2b] transition-all min-h-[50px] md:text-base px-5 py-4 text-xl duration-300 w-full"
                  >
                    {option.icon}
                    {option.label}
                  </a>
                ) : (
                  <span className="flex items-center md:w-auto justify-center gap-2 md:px-4 md:py-2 md:rounded-2xl border border-transparent md:text-base px-5 py-4 text-xl duration-300 w-full relative h-full pointer-events-none text-[#b3b3b3]">
                    {option.icon}
                    {option.label}
                    {option.upcoming && (
                      <span className="text-[10px] md:absolute left-1/2 md:-translate-x-1/2 bottom-0 md:translate-y-1/2 md:opacity-80">
                        ¡Próximamente!
                      </span>
                    )}
                  </span>
                )}
              </li>
            ))}
          </ul>{" "}
        </nav>
        <div className="flex md:flex-grow md:basis-0 items-center gap-4 mr-4 ml-auto md:ml-0 justify-end">
          <button className="py-2.5 px-3 rounded-full justify-center bg-[#161616] text-[#b3b3b3] border-[#2c2c2c] font-normal border hover:scale-105 transition-transform duration-300 text-base leading-none inline-flex items-center gap-2">
            <Github className="size-5 text-[#b3b3b3]" />
            Github
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
}

/* eslint-disable @next/next/no-img-element */
"use client";
import "./globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faMobileScreenButton,
  faCalendarDays,
  faLocationDot,
  faEnvelope,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import IconBox from "@/components/IconBox";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { metadata } from "@/metadata";
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("About");
  const pathname = usePathname();
  const router = useRouter();
  const togglePersonalInfo = () => setShowPersonalInfo((prev) => !prev);
  const navHeadings: Record<string, string> = {
    "/": "About",
    "/skills": "Skills",
    "/projects": "Projects",
    "/experience": "Experience",
    "/contact": "Contact",
  };
  useEffect(() => {
    // Set the heading based on the current pathname
    setActiveNavLink(navHeadings[pathname] || "About");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  const handleNavLinkClick = (value: string) => {
    setActiveNavLink(value);

    const href = value === "About" ? "/" : `/${value.toLowerCase()}`;
    router.push(href);
  };
  const personalInfo = [
    {
      icon: faEnvelope,
      type: "Email",
      value: "tejaswadayalsri@gmail.com",
    },
    {
      icon: faMobileScreenButton,
      type: "Phone",
      value: "+91-8318244549",
    },
    {
      icon: faCalendarDays,
      type: "Birthday",
      value: "19 May, 1999",
    },
    {
      icon: faLocationDot,
      type: "Location",
      value: "Lucknow, U.P., India",
    },
  ];
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon/favicon.svg" sizes="any" />
      </head>
      <body>
        <main className="p-6 md:p-12 xl:p-14 bg-primary min-h-[100vh]">
          <Analytics/>
          {/* Small and Medium Screen Navbar */}
          <div className="w-[100vw] max-w-[100vw] px-8 py-4 rounded-xl bg-dark-grey/50 backdrop-blur-md shadow-lg ring-1 ring-black/5 z-20 fixed bottom-0 left-0 flex gap-4 md:gap-6 justify-center items-center xl:hidden overflow-x-scroll">
            {Object.values(navHeadings).map((value, index) => (
              <button
                type="button"
                key={index}
                className={`hover:text-primary-icon cursor-pointer transition-colors max-sm:text-sm text-xl ${
                  value == activeNavLink
                    ? "text-primary-icon"
                    : "text-primary-white"
                }`}
                onClick={() => handleNavLinkClick(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="flex justify-center max-xl:flex-col gap-8">
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                success: {
                  style: {
                    background: "#383839",
                    color: "hsl(0, 0%, 98%)",
                  },
                },
                error: {
                  style: {
                    background: "#383839",
                    color: "hsl(0, 0%, 98%)",
                  },
                },
              }}
            />
            <aside className="xl:w-[22%] border-primary-border">
              <div className="flex flex-col gap-4 bg-secondary max-xl:px-3 max-xl:rounded-3xl  rounded-2xl xl:items-center xl:justify-center py-4 xl:py-8 relative">
                <div
                  className={`xl:hidden  border ${
                    showPersonalInfo
                      ? "border-t-primary-icon border-bl-primary-icon border-b-secondary border-l-primary-icon  bg-gradient-to-br from-primary-icon/60  to-50% to-secondary transition-all"
                      : "border-t-separator border-b-primary-border border-l-separator "
                  } border-r-secondary border-tr-secondary  p-3 rounded-tr-3xl rounded-bl-xl absolute top-0 right-0  shadow-lg cursor-pointer bg-opacity-10`}
                  onClick={togglePersonalInfo}
                >
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`text-primary-icon ${
                      showPersonalInfo ? "rotate-180" : "-rotate-0"
                    } transition-transform sm:hidden`}
                  />
                  <p className="max-sm:hidden capitalize text-primary-icon">
                    Show Contacts
                  </p>
                </div>
                <div className="flex xl:flex-col xl:justify-center items-center gap-4">
                  <div className="bg-dark-grey object-contain w-[30%] md:w-[15%] xl:w-[45%] rounded-xl xl:mt-8">
                    <img
                      src="/images/myImage.png"
                      alt="Tejaswa"
                    />
                  </div>
                  <div className="flex flex-col gap-4 max-md:gap-2">
                    <h1 className="font-semibold tracking-wide max-md:text-xl max-xl:mt-1 text-3xl text-primary-white">
                      Tejaswa Dayal
                    </h1>
                    <h3 className="bg-dark-grey py-[0.188rem] px-3 rounded-md text-center md:mt-1 text-secondary-white max-md:text-xs text-sm xl:w-[75%] self-center">
                      Software Developer
                    </h3>
                    <a
                      href="/resume/Resume.pdf"
                      className="self-center mt-1 min-w-24 text-primary-icon text-sm md:text-xl text-center rounded-2xl px-4 py-1 outline outline-separator bg-transparent hover:bg-primary-icon hover:text-dark-grey transition-colors duration-300 ease-in-out"
                      target="_blank"
                      download={"Tejaswa_Resume"}
                    >
                      <FontAwesomeIcon
                        icon={faFileArrowDown}
                        className="mr-[0.3rem]"
                      />
                      Resume
                    </a>
                  </div>
                </div>
                <div
                  className={`${
                    showPersonalInfo ? "block w-full" : "max-xl:hidden"
                  } xl:w-[90%] min-h-[1.2px] bg-separator my-4`}
                />
                <div
                  className={`${
                    showPersonalInfo ? "" : "max-xl:hidden"
                  } xl:personal-info grid max-md:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-1 gap-6 md:content-between xl:self-start xl:px-5`}
                >
                  {personalInfo.map((info, index) => (
                    <div className="flex gap-2" key={index}>
                      <IconBox icon={info.icon as IconDefinition} />
                      <div className="flex flex-col justify-between max-w-[60%]">
                        <h2 className="text-xs text-light-grey">{info.type}</h2>
                        <p className="text-sm font-semibold text-primary-white">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className={`${
                    showPersonalInfo ? "block w-full" : "hidden"
                  } xl:hidden min-h-[1.2px] bg-separator my-4`}
                />

                <div
                  className={`${
                    showPersonalInfo ? "block w-full" : "max-xl:hidden"
                  } flex gap-4 xl:mt-4 xl:justify-center max-xl:ml-4 items-center xl:-ml-4`}
                >
                  <Link
                    href="https://github.com/tejaswa-dayal"
                    className="text-md text-light-grey hover:text-gray-200 transition-colors duration-300 ease-in-out"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub as IconDefinition}
                      className="text-2xl cursor-pointer"
                    />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/tejaswa-dayal-5a4577183/"
                    className="text-md text-light-grey hover:text-gray-200 transition-colors duration-300 ease-in-out"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin as IconDefinition}
                      className="text-2xl cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </aside>
            <div className="grow bg-secondary flex flex-col rounded-2xl xl:max-w-[60%]">
              <div className="flex justify-between max-xl:justify-center">
                <div className="xl:w-[40%] self-end pl-5 pt-4 xl:pl-10 after:block after:w-[20%] xl:after:w-[10%] after:h-1 xl:after:h-2 after:bg-primary-icon after:rounded-md relative after:absolute after:-bottom-2 xl:after:-bottom-5">
                  <h1 className="text-primary-white font-bold text-3xl">
                    {activeNavLink == "About" ? "About Me" : activeNavLink}
                  </h1>
                </div>
                <div className="grow xl:flex justify-evenly bg-dark-grey px-1 py-4  font-semibold text-lg rounded-bl-2xl rounded-tr-2xl hidden">
                  {Object.values(navHeadings).map((value, index) => (
                    <button
                      type="button"
                      key={index}
                      className={`hover:text-primary-icon cursor-pointer transition-colors ${
                        value == activeNavLink
                          ? "text-primary-icon"
                          : "text-primary-white"
                      }`}
                      onClick={() => handleNavLinkClick(value)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-8 xl:py-12">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

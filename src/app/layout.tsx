"use client"
import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faMobileScreenButton, faCalendarDays, faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("About");
  const router = useRouter();
  const togglePersonalInfo = () => setShowPersonalInfo((prev) => !prev)
  const navHeadings = [
    "About",
    "Skills",
    "Projects",
    "Contact",
  ]
  const handleNavLinkClick = (value : string) =>{
    setActiveNavLink(value);

    const href = value === "About" ? "/" : `/${value.toLowerCase()}`;
    router.push(href);
  }
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/icon/favicon.svg" sizes="any" />
      </head>
      <body>
        <main className="p-2 sm:p-14 bg-primary">
          <div className="flex max-sm:flex-col gap-8">
          <aside className="container sm:w-[20%] border-primary-border">
            <div className="flex flex-col gap-4 bg-secondary max-sm:px-3 max-sm:rounded-3xl  rounded-2xl sm:items-center sm:justify-center py-4 sm:py-8 relative">
              <div className={`sm:hidden w-10 border ${showPersonalInfo ? "border-t-primary-icon border-bl-primary-icon border-b-secondary border-l-primary-icon  bg-gradient-to-br from-primary-icon/60  to-50% to-secondary transition-all" : "border-t-separator border-b-primary-border border-l-separator "} border-r-secondary border-tr-secondary  p-3 rounded-tr-3xl rounded-bl-xl absolute top-0 right-0  shadow-lg cursor-pointer bg-opacity-10`} onClick={togglePersonalInfo}>
              <FontAwesomeIcon icon={faAngleDown} className={`text-primary-icon ${showPersonalInfo ? "rotate-180" : "-rotate-0"} transition-transform`}/>
              </div>
              <div className="flex sm:flex-col sm:justify-center sm:items-center gap-4">
              <div className="bg-dark-grey w-[45%] max-sm:w-[25%] rounded-xl sm:mt-8">
                <img src="/images/avatar.png"
                alt = "Avatar"
                className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-4">
              <h1 className="font-semibold tracking-wide max-sm:text-xl max-sm:mt-1 text-3xl text-primary-white">Tejaswa Dayal</h1>
              <h3 className="bg-dark-grey py-[0.188rem] px-3 rounded-md text-center mt-1 text-secondary-white max-sm:text-xs text-sm sm:w-[75%] self-center">Software Developer</h3>
              </div>
              </div>
              <div className={`${showPersonalInfo ? "block w-full" : "max-sm:hidden"} sm:w-[90%] min-h-[1.2px] bg-separator my-4`}/>
              <div className={`${showPersonalInfo ? "" : "max-sm:hidden"} sm:personal-info flex flex-col gap-6 sm:self-start sm:px-5`}>
                <div className="flex gap-2">
                    <div className="icon-box">
                    <FontAwesomeIcon icon={faEnvelope} className="text-primary-icon"/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h2 className="text-xs text-light-grey">EMAIL</h2>
                        <p className="text-sm font-semibold text-primary-white">tejaswadayalsri@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="icon-box">
                    <FontAwesomeIcon icon={faMobileScreenButton} className="text-primary-icon"/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h2 className="text-xs text-light-grey uppercase">Phone</h2>
                        <p className="text-sm font-semibold text-primary-white">+918318244549</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="icon-box">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-primary-icon"/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h2 className="text-xs text-light-grey uppercase">Birthday</h2>
                        <p className="text-sm font-semibold text-primary-white">19 May, 1999</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="icon-box">
                    <FontAwesomeIcon icon={faLocationDot} className="text-primary-icon"/>
                    </div>
                    <div className="flex flex-col justify-between max-w-50">
                        <h2 className="text-xs text-light-grey uppercase">Location</h2>
                        <p className="text-sm font-semibold text-primary-white">Lucknow, U.P., India</p>
                    </div>
                </div>
              </div>
              <div className={`${showPersonalInfo ? "block w-full" : "hidden"} sm:hidden min-h-[1.2px] bg-separator my-4`}/>
  

                
                <div className={`${showPersonalInfo ? "block w-full" : "hidden"} flex gap-4 sm:mt-4 sm:justify-center items-center sm:-ml-4`}>
                  <a href="#" className="text-md text-light-grey"><FontAwesomeIcon icon={faGithub} className="text-2xl cursor-pointer"/></a>
                  <a href="#" className="text-md text-light-grey"><FontAwesomeIcon icon={faLinkedin} className="text-2xl cursor-pointer"/></a>
                </div>
            </div>  
          </aside>
          <div className="grow bg-secondary flex flex-col rounded-2xl">    
          <div className="flex justify-between">
            <div className="sm:w-[40%] self-end pl-5 pt-4 sm:pl-10 after:block after:w-[20%] sm:after:w-[10%] after:h-1 sm:after:h-2 after:bg-primary-icon after:rounded-md relative after:absolute after:-bottom-2 sm:after:-bottom-5">
            <h1 className="text-primary-white font-bold sm:text-3xl text-2xl">
              {
                activeNavLink == "About" ? "About Me" : activeNavLink
              }
            </h1>
              </div>  
            <div className="grow sm:flex justify-evenly bg-dark-grey px-1 py-4  font-semibold text-lg rounded-bl-2xl rounded-tr-2xl hidden">
              {
                navHeadings.map((value, index) => <a key={index}
                className={`hover:text-primary-icon cursor-pointer transition-colors ${value == activeNavLink ? "text-primary-icon" : "text-primary-white"}`}
                onClick={() => handleNavLinkClick(value)}>
                  {value}
                </a>)
              }
            </div>
          </div>
<div className="px-10 py-12">

          {children}
</div>
            </div>  
          </div>
        </main>        
        
        </body>
    </html>
  );
}

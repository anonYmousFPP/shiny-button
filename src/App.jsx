import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ShinyButton = ({ children, href = "#", className = "" }) => {
  return (
    <a
      href={href}
      className={`group relative flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-blue-600 px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:ring-2 hover:ring-blue-700 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <FaArrowRight className="size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]" />
      </span>

      <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
    </a>
  );
};

export default function App() {
  return (
    <section className="relative py-24 bg-gray-100">
      <div className="w-full max-w-md mx-auto">
        <ShinyButton
          href="/sign-up"
          className="relative z-10 h-14 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          Start For Free Today
        </ShinyButton>
      </div>
    </section>
  );
}

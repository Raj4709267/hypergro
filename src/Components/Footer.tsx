import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 ShortVid —
          <a
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @rajkumarmahto
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="ml-3 text-gray-500"
            href={"https://www.linkedin.com/in/rajkumarmahto/"}
            target="_blank"
          >
            <IoLogoLinkedin color="#6b7280" fontSize={"1.5rem"} />
          </a>
          <a
            className="ml-3 text-gray-500"
            href={"https://github.com/Raj4709267"}
            target="_blank"
          >
            <IoLogoGithub color="#6b7280" fontSize={"1.5rem"} />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

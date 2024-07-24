import React from "react";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <div>
      <footer className="">
        <div className="flex justify-center items-center gap-4 mt-4 flex-wrap">
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer noopener"
                key={i}
                className="social-link"
              >
                <img
                  src={social.iconUrl}
                  alt={social.name}
                  className="w-8 h-8"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="">
          <p className="text-slate-500 justify-center items-center flex mt-4">
            Made with ❤️ by Talha Abbas
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

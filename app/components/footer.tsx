"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaRss,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { SiGooglescholar } from "react-icons/si";
import { metaData, socialLinks } from "app/lib/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.scholar} icon={SiGooglescholar} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.discord} icon={FaDiscord} />
      {/* <a href="/rss.xml" target="_self">
        <FaRss />
      </a> */}
    </div>
  );
}

export default function Footer() {
  return (
    <small className="block text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR} Pushpa Kumar Balan</time>. Powered by{" "}
      <a
        className="no-underline hover:underline"
        href="https://nextjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Next.js
      </a>{" "}
      with {" "}
      <a
        className="no-underline hover:underline"
        href="https://github.com/pushpakumarbalan/researchfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        researchfolio
      </a>{" "}
      template. Deployed on{" "}
      <a
        className="no-underline hover:underline"
        href="https://vercel.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vercel
      </a>.
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
      <SocialLinks />
    </small>
  );
}

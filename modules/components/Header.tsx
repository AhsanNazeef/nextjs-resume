import React from "react";
import { SocialIcon } from "react-social-icons";
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";
import { PageInfo, Social } from "../../typing";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

const Header = ({ socials, pageInfo }: Props) => {
  return (
    <header className="fixed w-full z-10">
      <div className="p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          {/* Social Icons */}
          {socials.map((social) => (
            <SocialIcon
              target="_blank"
              rel="noreferrer"
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <a href={pageInfo?.resume} target="_blank" rel="noreferrer">
            <IoMdDownload color="gray" className="cursor-pointer w-6 h-6 m-2" />
          </a>
          <a href={pageInfo?.resume} target="_blank" rel="noreferrer">
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Resume
            </p>
          </a>
          <SocialIcon
            url="#contact"
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <a href="#contact">
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get In Touch
            </p>
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

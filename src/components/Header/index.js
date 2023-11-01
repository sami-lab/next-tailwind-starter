"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  FaceBookIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
  SearchIcon,
} from "../Icons";

import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header
      className='w-full p-4  px-5 md:px-10 flex items-center justify-between'
      style={{ borderBottom: "1px solid #FF3D5A" }}
    >
      <Logo />

      <button
        className='inline-block md:hidden z-50'
        onClick={toggle}
        aria-label='Hamburger Menu'
      >
        <div className='w-6 cursor-pointer transition-all ease duration-300'>
          <div className='relative'>
            <span
              className='absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200'
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className='absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200'
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className='absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200'
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className='w-max py-3 px-6 md:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  md:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        '
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href='/' className='mr-2'>
          Home
        </Link>
        <Link href='/about' className='mx-2'>
          About
        </Link>
        <Link href='/contact' className='mx-2'>
          Contact
        </Link>
        {/* <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label='theme-switcher'
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button> */}
      </nav>

      <nav
        className=' w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden md:flex
         top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-md z-50'
      >
        <Link href='/' className='mr-2'>
          Home
        </Link>
        <Link href='/about' className='mx-2'>
          About
        </Link>
        <Link href='/contact' className='mx-2'>
          Contact
        </Link>
        {/* <button onClick={() => setMode(mode === "light" ? "dark" : "light")  }
            className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
            "bg-light text-dark" )}
            aria-label="theme-switcher"
            >
                {
                  mode === "light" ? <MoonIcon className={"fill-dark"} />  : <SunIcon className={"fill-dark"} />
                }
            </button> */}
      </nav>
      <div className=' hidden md:flex items-center'>
        <a
          href={siteMetadata.twitter}
          className='inline-block w-6 h-6 mr-4'
          aria-label='Reach out to me via Twitter'
          target='_blank'
        >
          <TwitterIcon className='hover:scale-125 transition-all ease duration-200' />
        </a>
        <a
          href={siteMetadata.linkedin}
          className='inline-block w-6 h-6 mr-4'
          aria-label='Reach out to me via facebook'
          target='_blank'
        >
          <FaceBookIcon className='hover:scale-125 transition-all ease duration-200' />
        </a>
        <div
          className='inline-block w-6 h-6 mr-4'
          style={{ cursor: "pointer" }}
        >
          <SearchIcon className='hover:scale-125 transition-all ease duration-200' />
        </div>
        <div className='inline-block h-6 mr-4'>
          <button class='outline outline-offset-2 outline-1 text-light px-2 rounded'>
            Login
          </button>
        </div>
        <div className='inline-block h-6 mr-4'>
          <button class='outline outline-offset-2 outline-1 text-light px-2 rounded'>
            Subcribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

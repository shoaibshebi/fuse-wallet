import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import fuseLogo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import PrimaryButton from "../reuseable/PrimaryButton";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const NavItems = ["Network", "Developers", "Solutions", "Company"];

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {NavItems.map((item, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="#" className="flex items-center text-black font-[18px]">
            {item}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-3xl py-2 px-4 lg:px-8 lg:py-4 shadow-transparent bg-themeClr ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img src={fuseLogo} alt="logo" className="h-4 sm:h-8 " />
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <div className="flex justify-center items-center space-x-8">
          <FontAwesomeIcon
            icon={faTwitter}
            className="hidden lg:inline-block text-center font-noraml text-black text-[30px]"
          />
          <PrimaryButton size="sm">Build on Fuse</PrimaryButton>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <FontAwesomeIcon icon={faClose} className="text-black h-6" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-black h-6" />
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex justify-center items-center space-x-8">
            <PrimaryButton style="block w-full">Build on Fuse</PrimaryButton>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}

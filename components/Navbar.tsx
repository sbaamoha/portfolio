import { useEffect, useState } from "react";
import Link from "next/link";
// react icons
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdLightMode, MdModeNight } from "react-icons/md";
// animations
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <MdLightMode
          className="text-xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MdModeNight
          className="text-xl cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  // use state snippet
  const [navIsOpen, setnavIsOpen] = useState<boolean>(true);
  // init animations
  useEffect(() => {
    AOS.init();
    setMounted(true);
  }, []);

  return (
    <nav
      className="flex px-3 py-3 lg:px-12 lg:py-6 nav items-center justify-between capitalize shadow-sm"
      data-aos="fade-down"
      data-aos-delay="50"
      data-aos-duration="1500"
    >
      <Link
        href="/"
        className="flex capitalize transition-all gap-2 items-center text-2xl"
      >
        <h3>mohamed</h3>
      </Link>

      <div
        className="humberger lg:hidden cursor-pointer "
        onClick={() => setnavIsOpen((prev) => !prev)}
      >
        {navIsOpen ? <BiMenu /> : <BiMenuAltRight />}
      </div>
      <ul className="ul">
        {["about", "experience", "projects", "contact"].map((item) => (
          <li className="flex items-center" key={item}>
            <div className="w-2 h-2 rounded-full" />
            <Link href={`#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>

      <ul
        className={`ulCol lg:hidden flex-col bg-primary-color dark:bg-slate-800 dark:text-white absolute top-[60px] shadow-lg w-[60vw] h-[90vh] p-6 ${
          !navIsOpen ? `right-0` : `right-[100%]`
        } `}
      >
        {["projects", "technologies", "about"].map((item) => (
          <li
            onClick={() => setnavIsOpen(true)}
            className="btnCol my-6"
            key={item}
          >
            <Link className="text-xl font-extrabold" href={`#${item}`}>
              {item}
            </Link>
          </li>
        ))}
        <li className="flex text-2xl gap-3 absolute bottom-16 right-5">
          <Link
            href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
            legacyBehavior
            passHref
          >
            <a target="_blank" className="hover:text-blue-400">
              <BsGithub />
            </a>
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
            legacyBehavior
            passHref
          >
            <a target="_blank" className="hover:text-blue-400">
              <BsLinkedin />
            </a>
          </Link>
          {renderThemeChanger()}
        </li>
      </ul>

      <div className="hidden lg:block">{renderThemeChanger()}</div>
    </nav>
  );
};

export default Navbar;

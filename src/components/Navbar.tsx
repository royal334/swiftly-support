import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Team", href: "#team" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-100 transition-all duration-300 px-6 py-4 md:px-[60px] md:py-[18px]",
        "bg-midnight/95 backdrop-blur-xl border-b border-amber/20",
        scrolled ? "shadow-lg shadow-black/20" : "",
      )}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="nav-logo flex items-center space-x-2">
          <span className="text-xl md:text-[22px] font-bold font-display text-white tracking-wider">
            SWIFTLY<span> SUPPORT</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-[36px]">
          <ul className="flex items-center gap-[36px] list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/75 hover:text-amber transition-colors tracking-wide"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <ThemeToggle />
            <a
              href="#contact"
              className="bg-amber hover:bg-amber-light text-midnight px-6 py-2.5 rounded-[4px] font-bold text-[13px] transition-all hover:-translate-y-0.5"
            >
              GET STARTED
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-4 lg:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-white hover:text-amber transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-midnight/98 backdrop-blur-2xl border-b border-amber/20 p-8 lg:hidden flex flex-col space-y-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white/80 hover:text-amber transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-amber text-midnight px-6 py-4 rounded-[4px] font-bold text-center transition-colors"
            onClick={() => setIsOpen(false)}
          >
            GET STARTED
          </a>
        </motion.div>
      )}

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-amber origin-left z-110"
        style={{ scaleX }}
      />
    </nav>
  );
};

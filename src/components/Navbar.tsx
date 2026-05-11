import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./Button";
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
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "How It Works", href: "#how-it-works" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <motion.div
        className={cn(
          "container mx-auto px-6 py-3 rounded-full flex items-center justify-between transition-all duration-300",
          scrolled ? "glass dark:glass-dark shadow-xl" : "bg-transparent",
        )}
      >
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img src="/image.png" alt="" className="w-10 h-10 rounded-xl" />
          <span className="text-2xl font-bold font-display tracking-tight">
            Swiftly Support
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <Button
            size="sm"
            onClick={() =>
              document
                .getElementById("cta")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started
          </Button>
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-4 right-4 glass dark:glass-dark rounded-3xl p-6 md:hidden shadow-2xl flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium py-2 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#cta" className="w-full">
            Get Started
          </a>
        </motion.div>
      )}

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary origin-left z-50"
        style={{ scaleX }}
      />
    </nav>
  );
};

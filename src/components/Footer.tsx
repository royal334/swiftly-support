export const Footer = () => {
  return (
    <footer className="footer py-12 px-6 md:px-[60px] bg-[#050d1a] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="footer-logo font-display text-2xl text-white font-bold tracking-tighter">
          Swiftly <span className="text-amber">Support</span>
        </div>

        <div className="footer-copy text-white/30 text-sm font-medium">
          © 2025 Swiftly Support Agency. All rights reserved.
        </div>

        <div className="footer-social">
          <a
            href="https://x.com/swiftly_support"
            target="_blank"
            className="contact-item flex items-center group"
          >
            <div className="contact-icon w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber mr-5 group-hover:bg-amber group-hover:text-midnight transition-all duration-300">
              <span className="text-xl font-bold italic">𝕏</span>
            </div>
            <div className="contact-detail">
              <div className="label text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">
                Follow Us
              </div>
              <div className="value text-white group-hover:text-amber transition-colors">
                @swiftly_support
              </div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
